package com.example.hcbc.global.redis;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum RedisKey {
    MATCH_QUEUE("q:match"),
    USER_WAITING("waiting:%d"),
    ROOM_MEMBERS("room:%s:members"),
    ROOM_META("room:%s:meta"),
    ROOM_MESSAGES("room:%s:msgs"),
    ROOM_CLOSED("room:%s:closed"),
    USER_ROOMS("user:%d:rooms");

    private final String pattern;

    public String of(Object... args) {
        return args.length == 0 ? pattern : String.format(pattern, args);
    }
}
