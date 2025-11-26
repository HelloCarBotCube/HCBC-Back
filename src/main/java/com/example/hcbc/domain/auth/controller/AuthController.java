package com.example.hcbc.domain.auth.controller;

import com.example.hcbc.domain.auth.dto.request.SignInRequest;
import com.example.hcbc.domain.auth.dto.request.SignOutRequest;
import com.example.hcbc.domain.auth.dto.request.SignUpRequest;
import com.example.hcbc.domain.auth.dto.response.CheckIdResponse;
import com.example.hcbc.domain.auth.dto.response.TokenResponse;
import com.example.hcbc.domain.auth.service.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Auth API", description = "Auth API입니다.")
public class AuthController {

    private final SignUpService signUpService;
    private final SignInService signInService;
    private final SignOutService signOutService;
    private final ReissueToken reissueToken;

    @PostMapping("/signup")
    @Tag(name = "Auth API")
    @Operation(summary = "signUp", description = "회원가입 API입니다.")
    public ResponseEntity<Void> signUp(@Valid @RequestBody SignUpRequest request) {
        signUpService.execute(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/check-id")
    @Tag(name = "Auth API")
    @Operation(summary = "checkId", description = "아이디 중복 체크 API입니다.")
    public CheckIdResponse checkId(@RequestParam String loginId) {
        boolean available = signUpService.isLoginIdAvailable(loginId);
        return new CheckIdResponse(available);
    }

    @PostMapping("/signin")
    @Tag(name = "Auth API")
    @Operation(summary = "signIn", description = "로그인 API입니다.")
    public ResponseEntity<TokenResponse> signIn(@Valid @RequestBody SignInRequest request) {
        TokenResponse response = signInService.execute(request);
        return ResponseEntity.ok(response);
    }

    @PatchMapping("/reissue")
    @Tag(name = "Auth API")
    @Operation(summary = "reissueToken", description = "토큰 재발급 API입니다.")
    public ResponseEntity<TokenResponse> reissueToken(@RequestHeader("RefreshToken") String refreshToken) {
        TokenResponse tokenResponse = reissueToken.execute(refreshToken);
        return ResponseEntity.ok(tokenResponse);
    }

    @DeleteMapping("/signout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @Tag(name = "Auth API")
    @Operation(summary = "signOut", description = "로그아웃 API입니다.")
    public void signOut(@RequestHeader("RefreshToken") String refreshToken) {
        signOutService.execute(new SignOutRequest(refreshToken));
    }
}