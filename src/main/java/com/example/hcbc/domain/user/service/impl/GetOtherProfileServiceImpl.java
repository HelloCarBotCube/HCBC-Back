package com.example.hcbc.domain.user.service.impl;

import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.service.GetOtherProfileService;
import com.example.hcbc.global.util.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class GetOtherProfileServiceImpl implements GetOtherProfileService {

    private final UserDetailRepository userDetailRepository;

    @Override
    @Transactional(readOnly = true)
    public ProfileResponseDto execute(Long userId) {
        UserDetail detail = userDetailRepository.findByUserId(userId)
                .orElseThrow(NotFoundUserException::new);

        Objects.requireNonNull(detail.getUser(), "사용자 정보를 찾을 수 없습니다.");

        return ProfileResponseDto.builder()
                .userId(detail.getUserId())
                .loginId(detail.getUser().getLoginId())
                .name(detail.getName())
                .age(detail.getAge())
                .address(detail.getAddress())
                .gender(detail.getGender())
                .categories(detail.getCategories() == null ? Set.of() : Set.copyOf(detail.getCategories()))
                .build();
    }
}
