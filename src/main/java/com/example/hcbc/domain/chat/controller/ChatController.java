package com.example.hcbc.domain.chat.controller;

import com.example.hcbc.domain.chat.dto.request.ChatMessageRequest;
import com.example.hcbc.domain.chat.service.ChatMessageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "Chat API", description = "Chat API입니다")
public class ChatController {

    private final ChatMessageService chatMessageService;

    @MessageMapping("/room/{roomId}/send")
    @Tag(name = "Chat API")
    @Operation(summary = "send", description = "메시지 전송 API입니다.")
    public void send(@DestinationVariable Long roomId, ChatMessageRequest request) {
        var auth = org.springframework.security.core.context.SecurityContextHolder
                .getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new com.example.hcbc.domain.auth.exception.UnauthorizedException();
        }
        chatMessageService.execute(roomId, request);
    }

    @MessageMapping("/room/{roomId}/leave")
    @Tag(name = "Chat API")
    @Operation(summary = "leave", description = "채팅방 나가기 API입니다.")
    public void leave(@DestinationVariable Long roomId) {
        chatMessageService.leave(roomId);
    }
}