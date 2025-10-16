package com.example.hcbc.domain.user.service.impl;

import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;
import com.example.hcbc.domain.user.service.UpdateMyProfileService;
import com.example.hcbc.global.util.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UpdateMyProfileServiceImpl implements UpdateMyProfileService {

    private final UserDetailRepository userDetailRepository;
    private final UserUtil userUtil;

    @Override
    @Transactional
    public ProfileResponseDto execute(UpdateMyProfileRequestDto request) {
        User user = userUtil.getCurrentUser();

        UserDetail detail = userDetailRepository.findByUserId(user.getId())
                .orElseThrow(NotFoundUserException::new);

        if (request.getName() != null)      detail.setName(request.getName());
        if (request.getAge() != null)       detail.setAge(request.getAge());
        if (request.getAddress() != null)   detail.setAddress(request.getAddress());
        if (request.getGender() != null)    detail.setGender(request.getGender());

        if (request.getCategories() != null) {
            if (detail.getCategories() == null) {
                detail.setCategories(new LinkedHashSet<>());
            } else {
                detail.getCategories().clear();
            }
            detail.getCategories().addAll(new LinkedHashSet<>(request.getCategories()));
        }

        userDetailRepository.save(detail);

        return ProfileResponseDto.builder()
                .userId(detail.getUserId())
                .name(detail.getName())
                .age(detail.getAge())
                .address(detail.getAddress())
                .gender(detail.getGender())
                .categories(detail.getCategories() == null ? Set.of() : Set.copyOf(detail.getCategories()))
                .build();
    }
}
