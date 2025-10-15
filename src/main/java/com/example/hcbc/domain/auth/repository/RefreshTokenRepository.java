package com.example.hcbc.domain.auth.repository;

import com.example.hcbc.domain.auth.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);
    Optional<RefreshToken> findByUserIdAndToken(Long userId, String token);

    @Modifying
    void deleteByToken(String hash);
}
