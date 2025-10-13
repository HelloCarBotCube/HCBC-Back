// src/main/java/com/example/hcbc/service/UserProfileServiceImpl.java
package com.example.hcbc.domain.user.service;

import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.domain.user.dto.UpdateMyProfileRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashSet;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UserProfileServiceImpl implements UserProfileService {

    private final UserRepository userRepository;
    private final UserDetailRepository userDetailRepository;

    @Override
    @Transactional(readOnly = true)
    public ProfileResponseDto getOtherProfile(Long targetUserId) {
        UserDetail detail = userDetailRepository.findByUserId(targetUserId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자 프로필: " + targetUserId));
        Objects.requireNonNull(detail.getUser(), "사용자 정보를 찾을 수 없습니다.");
        return map(detail);
    }

    @Override
    @Transactional(readOnly = true)
    public ProfileResponseDto getMyProfile(Long currentUserId) {
        UserDetail detail = userDetailRepository.findByUserId(currentUserId)
                .orElseGet(() -> createEmptyDetail(currentUserId)); // 없으면 기본 생성
        return map(detail);
    }

    @Override
    @Transactional
    public ProfileResponseDto updateMyProfile(Long currentUserId, UpdateMyProfileRequestDto request) {
        UserDetail detail = userDetailRepository.findByUserId(currentUserId)
                .orElseGet(() -> createEmptyDetail(currentUserId));

        if (request.getName() != null)      detail.setName(request.getName());
        if (request.getAge() != null)       detail.setAge(request.getAge());
        if (request.getAddress() != null)   detail.setAddress(request.getAddress());
        if (request.getGender() != null)    detail.setGender(request.getGender());
        if (request.getCategories() != null) {
            detail.getCategories().clear();
            detail.getCategories().addAll(new LinkedHashSet<>(request.getCategories()));
        }

        userDetailRepository.save(detail);
        return map(detail);
    }

    private ProfileResponseDto map(UserDetail d) {
        return ProfileResponseDto.builder()
                .userId(d.getUserId())
                .name(d.getName())
                .age(d.getAge())
                .address(d.getAddress())
                .gender(d.getGender())
                .categories(d.getCategories())
                .build();
    }
    @Transactional
    protected UserDetail createEmptyDetail(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자: " + userId));

        UserDetail created = UserDetail.builder()
                .user(user)
                .build();
        created.setUserId(user.getId());
        return userDetailRepository.save(created);
    }
}
