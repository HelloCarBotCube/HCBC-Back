package com.example.hcbc.domain.auth.exception;

import com.example.hcbc.global.exception.ErrorCode;
import com.example.hcbc.global.exception.GlobalException;

public class DuplicateLoginIdException extends GlobalException {
    public DuplicateLoginIdException() {
        super(ErrorCode.DUPLICATE_LOGIN_ID);
    }
}
