package com.example.hcbc.domain.auth.dto.request;

public record SignInRequest(
    String loginId,
    String password
) {}
