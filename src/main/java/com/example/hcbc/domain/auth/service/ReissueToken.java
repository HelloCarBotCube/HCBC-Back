package com.example.hcbc.domain.auth.service;

import com.example.hcbc.domain.auth.dto.response.TokenResponse;

public interface ReissueToken {
    TokenResponse execute(String refreshToken);
}
