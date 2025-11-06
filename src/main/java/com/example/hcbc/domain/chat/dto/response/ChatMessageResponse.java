package com.example.hcbc.domain.chat.dto.response;

public record ChatMessageResponse(
        String roomId,
        Long senderId,
        String name,
        String content,
        Long timestamp
) {}
