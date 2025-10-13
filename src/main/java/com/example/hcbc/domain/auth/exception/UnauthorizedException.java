package com.example.hcbc.domain.auth.exception;

import com.example.hcbc.global.exception.ErrorCode;
import com.example.hcbc.global.exception.GlobalException;

public class UnauthorizedException extends GlobalException {
    public UnauthorizedException() {
        super(ErrorCode.UNAUTHORIZED);
    }
}
