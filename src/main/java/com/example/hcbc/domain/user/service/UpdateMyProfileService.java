package com.example.hcbc.domain.user.service;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;

public interface UpdateMyProfileService {
    ProfileResponseDto execute(UpdateMyProfileRequestDto request);
}
