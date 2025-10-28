package com.example.hcbc.domain.chat.service;

import com.example.hcbc.domain.chat.dto.request.ChatMessageRequest;
import com.example.hcbc.domain.chat.dto.response.ChatMessageResponse;

public interface ChatMessageService {
    ChatMessageResponse execute(Long chatRoomId, ChatMessageRequest request);
    void leave(Long chatRoomId);
}
