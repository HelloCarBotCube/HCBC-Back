package com.example.hcbc.domain.auth.service;

import com.example.hcbc.domain.auth.dto.request.SignUpRequest;

public interface SignUpService {
    void execute(SignUpRequest request);
    boolean isLoginIdAvailable(String loginId);
}
