package com.example.hcbc.domain.auth.service.impl;

import com.example.hcbc.domain.auth.dto.request.SignOutRequest;
import com.example.hcbc.domain.auth.exception.UnauthorizedException;
import com.example.hcbc.domain.auth.repository.RefreshTokenRepository;
import com.example.hcbc.domain.auth.service.SignOutService;
import com.example.hcbc.global.util.TokenHash;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class SignOutServiceImpl implements SignOutService {

    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    @Transactional
    public void execute(SignOutRequest request) {

        String raw = request.refreshToken();
        String hash = TokenHash.sha256Hex(raw);

        refreshTokenRepository.findByToken(hash)
                .orElseThrow(UnauthorizedException::new);

        refreshTokenRepository.deleteByToken(hash);

    }
}
