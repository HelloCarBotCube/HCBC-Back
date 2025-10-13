package com.example.hcbc.domain.auth.service;

import com.example.hcbc.domain.auth.dto.request.SignInRequest;
import com.example.hcbc.domain.auth.dto.response.TokenResponse;

public interface SignInService {
    TokenResponse execute(SignInRequest request);
}
