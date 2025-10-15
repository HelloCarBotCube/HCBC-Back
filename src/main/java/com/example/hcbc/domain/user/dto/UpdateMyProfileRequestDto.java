package com.example.hcbc.domain.user.dto;

import com.example.hcbc.global.common.enums.Category;
import com.example.hcbc.global.common.enums.Gender;
import lombok.*;

import java.util.Set;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class UpdateMyProfileRequestDto {
    private String name;
    private Integer age;
    private String address;
    private Gender gender;
    private Set<Category> categories;
}
