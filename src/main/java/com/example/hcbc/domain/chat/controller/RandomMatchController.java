package com.example.hcbc.domain.chat.controller;

import com.example.hcbc.domain.chat.dto.response.RoomListItemResponse;
import com.example.hcbc.domain.chat.dto.result.RandomMatchResult;
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


    @PostMapping("/start")
    public ResponseEntity<RandomMatchResult> start() {
        RandomMatchResult result = randomMatchService.execute();
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public List<RoomListItemResponse> list(@RequestParam(defaultValue = "50") int limit) {
        return chatQueryService.execute(limit);
    }
}
