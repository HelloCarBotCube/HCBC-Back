package com.example.hcbc.domain.chat.service;

import com.example.hcbc.domain.chat.dto.response.RoomListItemResponse;

import java.util.List;

public interface ChatQueryService {
    List<RoomListItemResponse> execute(int limit);
}
