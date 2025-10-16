package com.example.hcbc.domain.user.controller;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;
import com.example.hcbc.domain.user.service.GetMyProfileService;
import com.example.hcbc.domain.user.service.GetOtherProfileService;
import com.example.hcbc.domain.user.service.UpdateMyProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final GetOtherProfileService  getOtherProfileService;
    private final GetMyProfileService getMyProfileService;
    private final UpdateMyProfileService updateMyProfileService;

    @GetMapping("/{id}")
    public ResponseEntity<ProfileResponseDto> getOtherProfile(@PathVariable("id") Long userId) {
        return ResponseEntity.ok(getOtherProfileService.execute(userId));
    }

    @GetMapping("/myprofile")
    public ResponseEntity<ProfileResponseDto> getMyProfile() {
        return ResponseEntity.ok(getMyProfileService.execute());
    }

    @PatchMapping("/myprofile-update")
    public ResponseEntity<ProfileResponseDto> updateMyProfile(@RequestBody @Valid UpdateMyProfileRequestDto request) {
        return ResponseEntity.ok(updateMyProfileService.execute(request));
    }
}
