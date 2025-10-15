package com.example.hcbc.global.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Clock;
import java.time.Instant;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class TokenParser {

    private final JwtProperties jwtProperties;
    private final Clock clock;

    private Key accessKey() {
        return Keys.hmacShaKeyFor(jwtProperties.getAccessSecret().getBytes(StandardCharsets.UTF_8));
    }

    private Key refreshKey() {
        return Keys.hmacShaKeyFor(jwtProperties.getRefreshSecret().getBytes(StandardCharsets.UTF_8));
    }

    public boolean validateToken(String token, TokenType type) {
        if (token == null || token.isBlank()) return false;

        try {
            Key key = (type == TokenType.ACCESS) ? accessKey() : refreshKey();

            Jwts.parserBuilder()
                    .setSigningKey(key)
                    .setClock(() -> Date.from(Instant.now(clock)))
                    .setAllowedClockSkewSeconds(2)
                    .requireIssuer(jwtProperties.getIssuer())
                    .build()
                    .parseClaimsJws(token);

            return true;
        } catch (ExpiredJwtException e) {
            // 만료된 토큰
            return false;
        } catch (JwtException | IllegalArgumentException e) {
            // 변조, 서명 불일치, 형식 오류
            return false;
        }
    }

    public ParsedClaims parse(String token, TokenType type) {
        if (token == null || token.isBlank()) {
            throw new IllegalArgumentException("토큰이 누락되었습니다.");
        }

        Key key = (type == TokenType.ACCESS) ? accessKey() : refreshKey();

        Jws<Claims> jws = Jwts.parserBuilder()
                .setSigningKey(key)
                .setClock(() -> Date.from(Instant.now(clock)))
                .setAllowedClockSkewSeconds(2)
                .requireIssuer(jwtProperties.getIssuer())
                .build()
                .parseClaimsJws(token);

        Claims c = jws.getBody();

        String sub = c.getSubject();
        Long memberId;
        try {
            memberId = Long.valueOf(sub);
        } catch (NumberFormatException e) {
            throw new JwtException("subject 형식이 잘못되었습니다(예상: Long ID): " + sub, e);
        }

        String loginId = c.get("lid", String.class);

        Instant issuedAt  = c.getIssuedAt()    != null ? c.getIssuedAt().toInstant()    : null;
        Instant expiresAt = c.getExpiration()  != null ? c.getExpiration().toInstant()  : null;

        return new ParsedClaims(memberId, loginId, issuedAt, expiresAt);
    }
}
