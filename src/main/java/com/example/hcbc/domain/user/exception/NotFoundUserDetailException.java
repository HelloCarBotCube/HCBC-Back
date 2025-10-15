package com.example.hcbc.domain.user.exception;

import com.example.hcbc.global.exception.ErrorCode;
import com.example.hcbc.global.exception.GlobalException;

public class NotFoundUserDetailException extends GlobalException {
  public NotFoundUserDetailException() {
    super(ErrorCode.NOT_FOUND_USER_DETAIL);
  }
}