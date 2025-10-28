package com.example.hcbc.global.websocket;

public record WsPrincipal(Long userId, String loginId) implements java.security.Principal {
    @Override public String getName() { return loginId; }
}
