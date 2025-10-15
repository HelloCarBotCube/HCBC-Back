package com.example.hcbc.global.security.jwt;

import java.time.Instant;

public record ParsedClaims(
        Long memberId,
        String loginId,
        Instant issuedAt,
        Instant expiresAt
) {}
