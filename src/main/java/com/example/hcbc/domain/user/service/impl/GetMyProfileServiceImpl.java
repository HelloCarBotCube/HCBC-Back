package com.example.hcbc.domain.user.service.impl;

import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.user.dto.ProfileResponseDto;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.domain.user.service.GetMyProfileService;
import com.example.hcbc.global.util.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class GetMyProfileServiceImpl implements GetMyProfileService {

    private final UserRepository userRepository;
    private final UserDetailRepository userDetailRepository;
    private final UserUtil userUtil;

    @Override
    @Transactional
    public ProfileResponseDto execute() {
        User user = userUtil.getCurrentUser();

        UserDetail detail = userDetailRepository.findByUserId(user.getId())
                .orElseThrow(NotFoundUserException::new);

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
