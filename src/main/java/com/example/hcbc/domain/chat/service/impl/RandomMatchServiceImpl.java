package com.example.hcbc.domain.chat.service.impl;

import com.example.hcbc.domain.chat.dto.result.Matched;
import com.example.hcbc.domain.chat.dto.result.Queued;
import com.example.hcbc.domain.chat.dto.result.RandomMatchResult;
import com.example.hcbc.domain.chat.entity.ChatRoom;
import com.example.hcbc.global.redis.RedisKey;
import com.example.hcbc.domain.chat.entity.RoomMember;
import com.example.hcbc.domain.chat.repository.ChatRoomRepository;
import com.example.hcbc.domain.chat.repository.RoomMemberRepository;
import com.example.hcbc.domain.chat.service.RandomMatchService;
import com.example.hcbc.global.util.UserUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class RandomMatchServiceImpl implements RandomMatchService {

    private static final Duration WAITING_TIMEOUT = Duration.ofMinutes(3);
    private static final int ESTIMATE_SECONDS_PER_USER = 3;
    private static final int MAX_ESTIMATE_SECONDS = 30;

    private final UserUtil userUtil;
    private final StringRedisTemplate redis;
    private final ChatRoomRepository chatRoomRepository;
    private final RoomMemberRepository roomMemberRepository;

    @Override
    public RandomMatchResult execute() {
        Long me = userUtil.getCurrentUser().getId();

        if (isAlreadyWaiting(me)) {
            return new Queued(RedisKey.USER_WAITING.of(me), estimateWaitTime());
        }

        Long opponent = findMatchFromQueueSkippingInvalid(me);

        if (opponent == null) {
            return addToWaitingQueue(me);
        }

        // 방 생성 + Redis 초기화
        return createChatRoom(me, opponent);
    }

    private boolean isAlreadyWaiting(Long userId) {
        return Boolean.TRUE.equals(redis.hasKey(RedisKey.USER_WAITING.of(userId)));
    }

    private Long findMatchFromQueueSkippingInvalid(Long me) {
        final String queueKey = RedisKey.MATCH_QUEUE.of();

        while (true) {
            String candidate = redis.opsForList().leftPop(queueKey);
            if (candidate == null) return null;

            Long other = Long.parseLong(candidate);
            if (Objects.equals(other, me)) {
                redis.opsForList().rightPush(queueKey, candidate);
                continue;
            }

            if (Boolean.TRUE.equals(redis.hasKey(RedisKey.USER_WAITING.of(other)))) {
                return other;
            }
        }
    }

    private RandomMatchResult addToWaitingQueue(Long userId) {
        String queueKey = RedisKey.MATCH_QUEUE.of();
        String waitingKey = RedisKey.USER_WAITING.of(userId);

        redis.opsForList().remove(queueKey, 0, String.valueOf(userId));
        redis.opsForList().rightPush(queueKey, String.valueOf(userId));
        redis.opsForValue().set(waitingKey, "1", WAITING_TIMEOUT);

        log.info("User {} added to waiting queue", userId);
        return new Queued(waitingKey, estimateWaitTime());
    }

    private RandomMatchResult createChatRoom(Long userId1, Long userId2) {
        ChatRoom chatRoom = chatRoomRepository.save(new ChatRoom());
        Long roomId = chatRoom.getId();
        String rid = String.valueOf(roomId);

        roomMemberRepository.save(RoomMember.builder().roomId(rid).userId(userId1).build());
        roomMemberRepository.save(RoomMember.builder().roomId(rid).userId(userId2).build());

        initializeRoomInRedis(roomId, userId1, userId2);

        redis.delete(RedisKey.USER_WAITING.of(userId1));
        redis.delete(RedisKey.USER_WAITING.of(userId2));

        return new Matched(rid, userId2);
    }

    private void initializeRoomInRedis(Long roomId, Long userId1, Long userId2) {
        String roomIdStr = String.valueOf(roomId);
        long now = Instant.now().toEpochMilli();

        redis.opsForSet().add(
                RedisKey.ROOM_MEMBERS.of(roomIdStr),
                String.valueOf(userId1),
                String.valueOf(userId2)
        );

        redis.opsForHash().putAll(
                RedisKey.ROOM_META.of(roomIdStr),
                Map.of(
                        "createdAt", String.valueOf(now),
                        "lastActiveAt", String.valueOf(now),
                        "lastMsgPreview", "" // 최초엔 비워둠
                )
        );

        redis.opsForZSet().add(RedisKey.USER_ROOMS.of(userId1), roomIdStr, now);
        redis.opsForZSet().add(RedisKey.USER_ROOMS.of(userId2), roomIdStr, now);
    }

    private int estimateWaitTime() {
        Long size = redis.opsForList().size(RedisKey.MATCH_QUEUE.of());
        long count = (size == null || size < 1) ? 1 : size;
        int seconds = (int) (count * ESTIMATE_SECONDS_PER_USER);
        return Math.min(MAX_ESTIMATE_SECONDS, seconds);
    }
}
