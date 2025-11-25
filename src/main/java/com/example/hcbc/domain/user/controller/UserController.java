package com.example.hcbc.domain.user.controller;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;
import com.example.hcbc.domain.user.service.GetMyProfileService;
import com.example.hcbc.domain.user.service.GetOtherProfileService;
import com.example.hcbc.domain.user.service.UpdateMyProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@Tag(name = "User API", description = "User API입니다")
public class UserController {

    private final GetOtherProfileService  getOtherProfileService;
    private final GetMyProfileService getMyProfileService;
    private final UpdateMyProfileService updateMyProfileService;

    @GetMapping("/{id}")
    @Tag(name = "User API")
    @Operation(summary = "getOtherProfile", description = "상대 프로필 조회 API입니다.")
    public ResponseEntity<ProfileResponseDto> getOtherProfile(@PathVariable("id") Long userId) {
        return ResponseEntity.ok(getOtherProfileService.execute(userId));
    }

    @GetMapping("/myprofile")
    @Tag(name = "User API")
    @Operation(summary = "getMyProfile", description = "내 프로필 조회 API입니다.")
    public ResponseEntity<ProfileResponseDto> getMyProfile() {
        return ResponseEntity.ok(getMyProfileService.execute());
    }

    @PatchMapping("/myprofile-update")
    @Tag(name = "User API")
    @Operation(summary = "updateMyProfile", description = "내 프로필 수정 API입니다.")
    public ResponseEntity<ProfileResponseDto> updateMyProfile(@RequestBody @Valid UpdateMyProfileRequestDto request) {
        return ResponseEntity.ok(updateMyProfileService.execute(request));
    }
}
