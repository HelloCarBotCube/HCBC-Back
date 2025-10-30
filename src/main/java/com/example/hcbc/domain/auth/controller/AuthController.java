package com.example.hcbc.domain.auth.controller;

import com.example.hcbc.domain.auth.dto.request.SignInRequest;
import com.example.hcbc.domain.auth.dto.request.SignOutRequest;
import com.example.hcbc.domain.auth.dto.request.SignUpRequest;
import com.example.hcbc.domain.auth.dto.response.CheckIdResponse;
import com.example.hcbc.domain.auth.dto.response.TokenResponse;
import com.example.hcbc.domain.auth.service.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final SignUpService signUpService;
    private final SignInService signInService;
    private final SignOutService signOutService;
    private final ReissueToken reissueToken;

    @PostMapping("/signup")
    public ResponseEntity<Void> signUp(@Valid @RequestBody SignUpRequest request) {
        signUpService.execute(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/check-id")
    public CheckIdResponse checkId(@RequestParam String loginId) {
        boolean available = signUpService.isLoginIdAvailable(loginId);
        return new CheckIdResponse(available);
    }

    @PostMapping("/signin")
    public ResponseEntity<TokenResponse> signIn(@Valid @RequestBody SignInRequest request) {
        TokenResponse response = signInService.execute(request);
        return ResponseEntity.ok(response);
    }

    @PatchMapping("/reissue")
    public ResponseEntity<TokenResponse> reissueToken(@RequestHeader("RefreshToken") String refreshToken) {
        TokenResponse tokenResponse = reissueToken.execute(refreshToken);
        return ResponseEntity.ok(tokenResponse);
    }

    @DeleteMapping("/signout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void signOut(@RequestHeader("RefreshToken") String refreshToken) {
        signOutService.execute(new SignOutRequest(refreshToken));
    }
}
