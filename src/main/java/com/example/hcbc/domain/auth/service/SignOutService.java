package com.example.hcbc.domain.auth.service;

import com.example.hcbc.domain.auth.dto.request.SignOutRequest;

public interface SignOutService {
    void execute(SignOutRequest request);
}
