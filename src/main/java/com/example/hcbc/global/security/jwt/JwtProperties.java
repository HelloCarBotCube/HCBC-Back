package com.example.hcbc.global.security.jwt;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import java.time.Duration;

@ConfigurationProperties("jwt")
@AllArgsConstructor
@Getter
@Validated

public class JwtProperties {

    @NotBlank
    private final String issuer;
    @NotBlank
    private final String accessSecret;
    @NotBlank
    private final String refreshSecret;
    @NotNull
    private final Duration accessTtl;
    @NotNull
    private final Duration refreshTtl;

}
