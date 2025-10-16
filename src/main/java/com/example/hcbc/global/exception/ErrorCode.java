package com.example.hcbc.global.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    //auth
    DUPLICATE_LOGIN_ID(409, "이미 존재하는 아이디입니다."),
    NOT_FOUND_USER(401, "존재하지 않는 사용자입니다."),
    UNAUTHORIZED(401, "아이디 또는 비밀번호가 잘못되었습니다."),

    //user
    NOT_FOUND_USER_DETAIL(404, "회원 상세 정보를 찾을 수 없습니다."),
    INVALID_USER_PRINCIPAL(401, "현재 인증된 사용자의 정보가 유효하지 않습니다.");

    private final int status;
    private final String message;
}
