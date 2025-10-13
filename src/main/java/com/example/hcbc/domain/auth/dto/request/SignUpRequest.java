package com.example.hcbc.domain.auth.dto.request;
import com.example.hcbc.global.common.enums.Gender;
import com.example.hcbc.global.common.enums.Category;
import jakarta.validation.constraints.Size;

import java.util.Set;

public record SignUpRequest(
    String loginId,
    String password,
    String name,
    Integer age,
    String address,
    Gender gender,
    @Size(min = 3, max = 3)
    Set<Category> categories
) {}