package com.example.hcbc.global.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final TokenParser tokenParser;

    private static final String AUTH = "Authorization";
    private static final String BEARER = "Bearer ";
    private static final AntPathMatcher PM = new AntPathMatcher();

    private static final List<String> WHITE = List.of(
            "/api/auth/signup",
            "/api/auth/signin",
            "/api/auth/reissue",
            "/api/auth/signout",
            "/swagger-ui/**",
            "/v3/api-docs/**",
            "/docs/**"
    );

    @Override
    protected boolean shouldNotFilter(HttpServletRequest req) {
        if ("OPTIONS".equalsIgnoreCase(req.getMethod())) return true;
        String path = req.getServletPath();
        return WHITE.stream().anyMatch(p -> PM.match(p, path));
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        try {
            if (SecurityContextHolder.getContext().getAuthentication() == null) {
                String token = resolve(req.getHeader(AUTH));
                if (token != null && tokenParser.validateToken(token, TokenType.ACCESS)) {
                    ParsedClaims c = tokenParser.parse(token, TokenType.ACCESS);

                    var principal = new com.example.hcbc.global.auth.UserPrincipal(c.memberId(), c.loginId(), "", null);

                    var auth = new UsernamePasswordAuthenticationToken(
                            principal, null, java.util.Collections.emptyList());
                    auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));

                    SecurityContext ctx = SecurityContextHolder.createEmptyContext();
                    ctx.setAuthentication(auth);
                    SecurityContextHolder.setContext(ctx);
                }
            }
        } catch (io.jsonwebtoken.JwtException | IllegalArgumentException ignored) {

        } finally {
            chain.doFilter(req, res);
        }
    }

    private String resolve(String header) {
        if (header == null) return null;
        String h = header.trim();
        if (!h.regionMatches(true, 0, BEARER, 0, BEARER.length())) return null;
        String t = h.substring(BEARER.length()).trim();
        return t.isEmpty() ? null : t;
    }
}
