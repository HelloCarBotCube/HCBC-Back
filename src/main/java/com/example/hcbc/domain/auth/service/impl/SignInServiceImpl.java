package com.example.hcbc.domain.auth.service.impl;

import com.example.hcbc.domain.auth.dto.request.SignInRequest;
import com.example.hcbc.domain.auth.dto.response.TokenResponse;
import com.example.hcbc.domain.auth.entity.RefreshToken;
import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.auth.exception.UnauthorizedException;
import com.example.hcbc.domain.auth.repository.RefreshTokenRepository;
import com.example.hcbc.domain.auth.service.SignInService;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.global.security.jwt.JwtProvider;
import com.example.hcbc.global.util.TokenHash;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SignInServiceImpl implements SignInService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    @Transactional
    public TokenResponse execute(SignInRequest request) {
        User user = userRepository.findByLoginId(request.loginId())
                .orElseThrow(NotFoundUserException::new);

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new UnauthorizedException();
        }

        String accessToken = jwtProvider.createAccessToken(user.getId(), user.getLoginId());
        String refreshToken = jwtProvider.createRefreshToken(user.getId());

        refreshTokenRepository.save(RefreshToken.builder()
                .userId(user.getId())
                .token(TokenHash.sha256Hex(refreshToken))
                .expiresAt(Instant.now().plus(jwtProvider.getRefreshTtl()))
                .build());

        LocalDateTime accessExp  = LocalDateTime.now().plus(jwtProvider.getAccessTtl());
        LocalDateTime refreshExp = LocalDateTime.now().plus(jwtProvider.getRefreshTtl());

        return new TokenResponse(
                accessToken,
                refreshToken,
                accessExp,
                refreshExp
        );
    }
}
