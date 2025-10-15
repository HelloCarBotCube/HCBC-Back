package com.example.hcbc.domain.user.service;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;

public interface UserProfileService {
    ProfileResponseDto getOtherProfile(Long targetUserId);
    ProfileResponseDto getMyProfile(Long currentUserId);
    ProfileResponseDto updateMyProfile(Long currentUserId, UpdateMyProfileRequestDto request);
}
