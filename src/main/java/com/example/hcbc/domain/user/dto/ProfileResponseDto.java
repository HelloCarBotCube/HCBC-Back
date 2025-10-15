// src/main/java/com/example/hcbc/dto/ProfileResponse.java
package com.example.hcbc.domain.user.dto;

import com.example.hcbc.global.common.enums.Category;
import com.example.hcbc.global.common.enums.Gender;
import lombok.*;

import java.util.Set;

@Getter
@AllArgsConstructor
@Builder
public class ProfileResponseDto {
    private Long userId;
    private String name;
    private Integer age;
    private String address;
    private Gender gender;
    private Set<Category> categories;
}
