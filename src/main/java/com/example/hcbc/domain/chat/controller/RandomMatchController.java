package com.example.hcbc.domain.chat.controller;

import com.example.hcbc.domain.chat.dto.response.ChatMessageResponse;
import com.example.hcbc.domain.chat.dto.response.RoomListItemResponse;
import com.example.hcbc.domain.chat.dto.result.RandomMatchResult;
import com.example.hcbc.domain.chat.service.ChatMessageService;
import com.example.hcbc.domain.chat.service.ChatQueryService;
import com.example.hcbc.domain.chat.service.RandomMatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class RandomMatchController {

    private final RandomMatchService randomMatchService;
    private final ChatQueryService chatQueryService;
    private final ChatMessageService chatMessageService;


    @PostMapping("/start")
    public ResponseEntity<RandomMatchResult> start() {
        RandomMatchResult result = randomMatchService.execute();
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public List<RoomListItemResponse> list(@RequestParam(defaultValue = "50") int limit) {
        return chatQueryService.execute(limit);
    }

    @DeleteMapping("/rooms/{roomId}")
    public ResponseEntity<Void> closeRoom(@PathVariable Long roomId) {
        chatMessageService.leave(roomId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/rooms/{roomId}/messages")
    public ResponseEntity<List<ChatMessageResponse>> getPastMessages(
            @PathVariable Long roomId,
            @RequestParam(defaultValue = "0") int startIndex,
            @RequestParam(defaultValue = "50") int count) {

        // (선택) 방 접근 권한 체크를 서비스에 위임하고 싶으면 서비스에서 validateAccess 호출
        return ResponseEntity.ok(chatMessageService.getPastMessages(roomId, startIndex, count));
    }
}
