package com.example.hcbc.domain.auth.service.impl;

import com.example.hcbc.domain.auth.dto.response.TokenResponse;

import com.example.hcbc.domain.auth.entity.RefreshToken;
import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.auth.exception.UnauthorizedException;
import com.example.hcbc.domain.auth.repository.RefreshTokenRepository;
import com.example.hcbc.domain.auth.service.ReissueToken;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.global.security.jwt.JwtProvider;
import com.example.hcbc.global.security.jwt.TokenParser;
import com.example.hcbc.global.security.jwt.TokenType;
import com.example.hcbc.global.util.TokenHash;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ReissueTokenImpl implements ReissueToken {

    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtProvider jwtProvider;
    private final TokenParser tokenParser;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public TokenResponse execute(String refreshToken) {

        if (!jwtProvider.validateRefreshToken(refreshToken)) {
            throw new UnauthorizedException();
        }

        var claims = tokenParser.parse(refreshToken, TokenType.REFRESH);
        Long userId = claims.memberId();

        String hash = TokenHash.sha256Hex(refreshToken);
        RefreshToken saveToken = refreshTokenRepository.findByUserIdAndToken(userId, hash)
                .orElseThrow(UnauthorizedException::new);


        User user = userRepository.findById(saveToken.getUserId())
                .orElseThrow(NotFoundUserException::new);

        String newAccessToken = jwtProvider.createAccessToken(user.getId(), user.getLoginId());
        String newRefreshToken = jwtProvider.createRefreshToken(user.getId());

        RefreshToken updatedToken = RefreshToken.builder()
                .userId(saveToken.getId())
                .token(TokenHash.sha256Hex(newRefreshToken))
                .expiresAt(Instant.now().plus(jwtProvider.getRefreshTtl()))
                .build();

        refreshTokenRepository.save(updatedToken);

        LocalDateTime accessExp  = LocalDateTime.now().plus(jwtProvider.getAccessTtl());
        LocalDateTime refreshExp = LocalDateTime.now().plus(jwtProvider.getRefreshTtl());

        return new TokenResponse(
                newAccessToken,
                newRefreshToken,
                accessExp,
                refreshExp
        );
    }
}
