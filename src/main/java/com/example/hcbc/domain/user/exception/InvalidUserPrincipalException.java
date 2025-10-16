package com.example.hcbc.domain.user.exception;

import com.example.hcbc.global.exception.ErrorCode;
import com.example.hcbc.global.exception.GlobalException;

public class InvalidUserPrincipalException extends GlobalException {
    public InvalidUserPrincipalException() {
        super(ErrorCode.INVALID_USER_PRINCIPAL);
    }
}
