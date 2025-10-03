// src/main/java/com/example/hcbc/service/UserProfileService.java
package com.example.hcbc.service;

import com.example.hcbc.dto.ProfileResponseDto;
import com.example.hcbc.dto.UpdateMyProfileRequestDto;

public interface UserProfileService {
    ProfileResponseDto getOtherProfile(Long targetUserId);
    ProfileResponseDto getMyProfile(Long currentUserId);
    ProfileResponseDto updateMyProfile(Long currentUserId, UpdateMyProfileRequestDto request);
}
