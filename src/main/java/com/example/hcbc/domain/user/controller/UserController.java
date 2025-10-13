package com.example.hcbc.domain.user.controller;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;
import com.example.hcbc.domain.user.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserProfileService userProfileService;

    @GetMapping("/user")
    public ResponseEntity<ProfileResponseDto> getOtherProfile(@RequestParam("userId") Long targetUserId) {
        return ResponseEntity.ok(userProfileService.getOtherProfile(targetUserId));
    }

    @GetMapping("/myprofile")
    public ResponseEntity<ProfileResponseDto> getMyProfile(
            @RequestHeader("X-User-Id") Long currentUserId
    ) {
        return ResponseEntity.ok(userProfileService.getMyProfile(currentUserId));
    }

    @PatchMapping("/myprofile/update")
    public ResponseEntity<ProfileResponseDto> updateMyProfile(
            @RequestHeader("X-User-Id") Long currentUserId,
            @RequestBody UpdateMyProfileRequestDto request
    ) {
        return ResponseEntity.ok(userProfileService.updateMyProfile(currentUserId, request));
    }
}
