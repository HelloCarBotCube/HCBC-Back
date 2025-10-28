package com.example.hcbc.domain.chat.dto.response;

public record RoomListItemResponse(
        String roomId,
        String lastMessage,
        long   lastActiveAt,
        Long   opponentUserId,
        String opponentLoginId,
        String opponentName
) {}
