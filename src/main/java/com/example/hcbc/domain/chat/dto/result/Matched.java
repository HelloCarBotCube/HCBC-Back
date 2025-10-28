package com.example.hcbc.domain.chat.dto.result;

public record Matched(
        String roomId,
        Long opponentId
) implements RandomMatchResult {}
