package com.example.hcbc.domain.chat.controller;

import com.example.hcbc.domain.chat.dto.request.ChatMessageRequest;
import com.example.hcbc.domain.chat.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ChatController {

    private final ChatMessageService chatMessageService;

    @MessageMapping("/room/{roomId}/send")
    public void send(@DestinationVariable Long roomId, ChatMessageRequest request) {
        var auth = org.springframework.security.core.context.SecurityContextHolder
                .getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new com.example.hcbc.domain.auth.exception.UnauthorizedException();
        }
        chatMessageService.execute(roomId, request);
    }

    @MessageMapping("/room/{roomId}/leave")
    public void leave(@DestinationVariable Long roomId) {
        chatMessageService.leave(roomId);
    }
}