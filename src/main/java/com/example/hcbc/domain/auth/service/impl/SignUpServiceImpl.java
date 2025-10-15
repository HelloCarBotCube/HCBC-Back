package com.example.hcbc.domain.auth.service.impl;

import com.example.hcbc.domain.auth.dto.request.SignUpRequest;
import com.example.hcbc.domain.auth.exception.DuplicateLoginIdException;
import com.example.hcbc.domain.auth.service.SignUpService;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.entity.UserDetail;
import com.example.hcbc.domain.user.repository.UserDetailRepository;
import com.example.hcbc.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashSet;

@Service
@RequiredArgsConstructor
public class SignUpServiceImpl implements SignUpService {

    private final UserRepository userRepository;
    private final UserDetailRepository userDetailRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void execute(SignUpRequest request){

        validateDuplicateLoginId(request.loginId());

        User user = User.builder()
                .loginId(request.loginId())
                .password(passwordEncoder.encode(request.password()))
                .build();

        userRepository.save(user);

        UserDetail userDetail = UserDetail.builder()
                .user(user)
                .name(request.name())
                .age(request.age())
                .address(request.address())
                .gender(request.gender())
                .categories(new LinkedHashSet<>(request.categories()))
                .build();

        userDetailRepository.save(userDetail);
    }

    private void validateDuplicateLoginId(String loginId) {
        if (userRepository.existsByLoginId(loginId)) {
            throw new DuplicateLoginIdException();
        }
    }
}
