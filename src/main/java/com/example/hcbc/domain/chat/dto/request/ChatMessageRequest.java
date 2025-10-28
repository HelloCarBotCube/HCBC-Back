package com.example.hcbc.domain.chat.dto.request;

import java.time.LocalDateTime;

public record ChatMessageRequest(
        String roomId,
        String name,
        String content,
        LocalDateTime sendAt

) {}
