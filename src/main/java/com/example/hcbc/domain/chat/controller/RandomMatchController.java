package com.example.hcbc.domain.chat.controller;

import com.example.hcbc.domain.chat.dto.response.ChatMessageResponse;
import com.example.hcbc.domain.chat.dto.response.RoomListItemResponse;
import com.example.hcbc.domain.chat.dto.result.RandomMatchResult;
import com.example.hcbc.domain.chat.service.ChatMessageService;
import com.example.hcbc.domain.chat.service.ChatQueryService;
import com.example.hcbc.domain.chat.service.RandomMatchService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
@Tag(name = "Chat API", description = "Chat API입니다")
public class RandomMatchController {

    private final RandomMatchService randomMatchService;
    private final ChatQueryService chatQueryService;
    private final ChatMessageService chatMessageService;


    @PostMapping("/start")
    @Tag(name = "Chat API")
    @Operation(summary = "start", description = "랜덤 매칭 API입니다.")
    public ResponseEntity<RandomMatchResult> start() {
        RandomMatchResult result = randomMatchService.execute();
        return ResponseEntity.ok(result);
    }

    @GetMapping
    @Tag(name = "Chat API")
    @Operation(summary = "list", description = "채팅방 목록 조회 API입니다.")
    public List<RoomListItemResponse> list(@RequestParam(defaultValue = "50") int limit) {
        return chatQueryService.execute(limit);
    }

    @DeleteMapping("/rooms/{roomId}")
    @Tag(name = "Chat API")
    @Operation(summary = "closeRoom", description = "채팅방 닫기 API입니다.")
    public ResponseEntity<Void> closeRoom(@PathVariable Long roomId) {
        chatMessageService.leave(roomId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/rooms/{roomId}/messages")
    @Tag(name = "Chat API")
    @Operation(summary = "getPastMessages", description = "메시지 불러오기 API입니다.")
    public ResponseEntity<List<ChatMessageResponse>> getPastMessages(
            @PathVariable Long roomId,
            @RequestParam(defaultValue = "0") int startIndex,
            @RequestParam(defaultValue = "50") int count) {

        return ResponseEntity.ok(chatMessageService.getPastMessages(roomId, startIndex, count));
    }
}
