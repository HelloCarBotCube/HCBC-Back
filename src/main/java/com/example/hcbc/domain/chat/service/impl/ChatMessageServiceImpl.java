package com.example.hcbc.domain.chat.service.impl;

import com.example.hcbc.domain.chat.dto.request.ChatMessageRequest;
import com.example.hcbc.domain.chat.dto.response.ChatMessageResponse;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.global.redis.RedisKey;
import com.example.hcbc.domain.chat.service.ChatMessageService;
import com.example.hcbc.global.util.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
public class ChatMessageServiceImpl implements ChatMessageService {

    private final UserDetailRepository userDetailRepository;
    private final UserRepository userRepository;

    private static final int MAX_CACHED_MESSAGES = 100;
    private static final int PREVIEW_MAX_LENGTH = 50;

    private final UserUtil userUtil;
    private final StringRedisTemplate redis;
    private final SimpMessagingTemplate messaging;

    @Override
    public ChatMessageResponse execute(Long chatRoomId, ChatMessageRequest request) {

        Long senderId = userUtil.getCurrentUser().getId();
        String roomId = String.valueOf(chatRoomId);

        validateAccess(roomId, senderId);

        long timestamp = Instant.now().toEpochMilli();

        updateMeta(roomId, request.content(), timestamp);
        cacheMessage(roomId, senderId, request.content(), timestamp);
        updateUserRoomList(roomId, timestamp);

        String displayName = resolveDisplayName(senderId);

        ChatMessageResponse response = new ChatMessageResponse(roomId, senderId, displayName, request.content());
        messaging.convertAndSend("/topic/room/" + roomId, response);

        return response;
    }

    @Override
    public void leave(Long chatRoomId) {
        Long userId = userUtil.getCurrentUser().getId();
        String roomId = String.valueOf(chatRoomId);

        validateAccess(roomId, userId);

        long timestamp = Instant.now().toEpochMilli();

        // 나가기 메시지 전송
        ChatMessageResponse leaveResponse = new ChatMessageResponse(roomId, userId, null, null);
        messaging.convertAndSend("/topic/room/" + roomId, leaveResponse);

        // Redis 정리
        Set<String> members = getMembers(roomId);
        for (String memberId : members) {
            redis.opsForZSet().remove(RedisKey.USER_ROOMS.of(Long.parseLong(memberId)), roomId);
        }
        redis.delete(RedisKey.ROOM_MEMBERS.of(roomId));
        redis.delete(RedisKey.ROOM_META.of(roomId));
        redis.delete(RedisKey.ROOM_MESSAGES.of(roomId));
        redis.opsForValue().set(RedisKey.ROOM_CLOSED.of(roomId), "1", Duration.ofMinutes(5));
    }

    private void validateAccess(String roomId, Long userId) {
        if (Boolean.TRUE.equals(redis.hasKey(RedisKey.ROOM_CLOSED.of(roomId)))) {
            throw new IllegalStateException("ROOM_CLOSED");
        }
        if (!Boolean.TRUE.equals(redis.opsForSet().isMember(
                RedisKey.ROOM_MEMBERS.of(roomId), String.valueOf(userId)))) {
            throw new IllegalStateException("NOT_MEMBER");
        }
    }

    private void updateMeta(String roomId, String content, long timestamp) {
        String metaKey = RedisKey.ROOM_META.of(roomId);
        String preview = truncate(content, PREVIEW_MAX_LENGTH);

        redis.opsForHash().put(metaKey, "lastMsgPreview", preview);
        redis.opsForHash().put(metaKey, "lastMessage", preview);

        redis.opsForHash().put(metaKey, "lastActiveAt", String.valueOf(timestamp));
    }

    private void cacheMessage(String roomId, Long senderId, String content, long timestamp) {
        String messageKey = RedisKey.ROOM_MESSAGES.of(roomId);
        String entry = timestamp + "|" + roomId + "|" + senderId + "|" + content;
        redis.opsForList().leftPush(messageKey, entry);
        redis.opsForList().trim(messageKey, 0, MAX_CACHED_MESSAGES - 1);
    }

    private void updateUserRoomList(String roomId, long timestamp) {
        Set<String> members = getMembers(roomId);
        for (String memberId : members) {
            redis.opsForZSet().add(RedisKey.USER_ROOMS.of(Long.parseLong(memberId)), roomId, timestamp);
        }
    }

    private Set<String> getMembers(String roomId) {
        return redis.opsForSet().members(RedisKey.ROOM_MEMBERS.of(roomId));
    }

    private String truncate(String text, int maxLength) {
        if (text == null || text.isEmpty()) return "";
        return text.length() <= maxLength ? text : text.substring(0, maxLength);
    }

    private String resolveDisplayName(Long userId) {
        String fromDetail = userDetailRepository.findByUserId(userId)
                .map(UserDetail::getName)
                .map(this::trimOrNull)
                .orElse(null);
        if (fromDetail != null) return fromDetail;

        return userRepository.findById(userId)
                .map(User::getLoginId)
                .map(this::trimOrNull)
                .orElse("unknown");
    }

    private String trimOrNull(String s) {
        if (s == null) return null;
        String t = s.trim();
        return t.isEmpty() ? null : t;
    }
}
