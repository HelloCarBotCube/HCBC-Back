package com.example.hcbc.domain.auth.dto.request;
import com.example.hcbc.global.common.enums.Gender;
import com.example.hcbc.global.common.enums.Category;

public record SignUpRequest(
    String loginId,
    String password,
    String name,
    Long age,
    String address,
    Gender gender,
    java.util.List<Category> categories
) {}