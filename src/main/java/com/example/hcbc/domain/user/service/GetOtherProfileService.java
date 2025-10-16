package com.example.hcbc.domain.user.service;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;

public interface GetOtherProfileService {
    ProfileResponseDto execute(Long userId);
}
