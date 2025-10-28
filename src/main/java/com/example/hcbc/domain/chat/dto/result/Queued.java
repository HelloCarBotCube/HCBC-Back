package com.example.hcbc.domain.chat.dto.result;

public record Queued(
        String ticketId,
        int estimatedWaitSec
) implements RandomMatchResult {}
