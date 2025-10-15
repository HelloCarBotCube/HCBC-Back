package com.example.hcbc.domain.auth.exception;

import com.example.hcbc.global.exception.ErrorCode;
import com.example.hcbc.global.exception.GlobalException;

public class NotFoundUserException extends GlobalException {
    public NotFoundUserException() {
        super(ErrorCode.NOT_FOUND_USER);
    }
}
