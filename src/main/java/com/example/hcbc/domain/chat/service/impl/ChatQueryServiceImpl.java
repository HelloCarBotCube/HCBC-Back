package com.example.hcbc.domain.chat.service.impl;

import com.example.hcbc.domain.chat.dto.response.RoomListItemResponse;
import com.example.hcbc.domain.chat.service.ChatQueryService;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.global.redis.RedisKey;
import com.example.hcbc.global.util.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ChatQueryServiceImpl implements ChatQueryService {

    private final StringRedisTemplate redis;
    private final UserUtil userUtil;
    private final UserRepository userRepository;
    private final UserDetailRepository userDetailRepository;

    public List<RoomListItemResponse> execute(int limit) {
        Long me = userUtil.getCurrentUser().getId();
        String zkey = RedisKey.USER_ROOMS.of(me);

        Set<ZSetOperations.TypedTuple<String>> tuples =
                redis.opsForZSet().reverseRangeWithScores(zkey, 0, Math.max(0, limit - 1));

        if (tuples == null || tuples.isEmpty()) return List.of();

        List<RoomListItemResponse> result = new ArrayList<>();

        for (ZSetOperations.TypedTuple<String> t : tuples) {
            String roomId = t.getValue();
            long lastActiveAt = (t.getScore() == null) ? 0L : t.getScore().longValue();

            String metaKey = RedisKey.ROOM_META.of(roomId);
            String lastMsg = (String) redis.opsForHash().get(metaKey, "lastMsgPreview");

            Set<String> members = redis.opsForSet().members(RedisKey.ROOM_MEMBERS.of(roomId));
            Long opponentId = null;
            String opponentLoginId = null;
            String opponentName = null;

            if (members != null) {
                for (String mid : members) {
                    Long uid = Long.valueOf(mid);
                    if (!uid.equals(me)) {
                        opponentId = uid;
                        break;
                    }
                }
            }

            if (opponentId != null) {
                opponentLoginId = userRepository.findById(opponentId)
                        .map(u -> u.getLoginId()).orElse(null);
                opponentName = userDetailRepository.findByUserId(opponentId)
                        .map(UserDetail::getName).orElse(null);
            }

            result.add(new RoomListItemResponse(
                    roomId, lastMsg, lastActiveAt, opponentId, opponentLoginId, opponentName
            ));
        }
        return result;
    }
}
