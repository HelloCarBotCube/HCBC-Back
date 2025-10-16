package com.example.hcbc.global.util;

import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.exception.InvalidUserPrincipalException;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.global.auth.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserUtil {

    private final UserRepository userRepository;

    public User getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserPrincipal userPrincipal) {
            String loginId = userPrincipal.getUsername();

            return userRepository.findByLoginId(loginId)
                    .orElseThrow(NotFoundUserException::new);
        }
        throw new InvalidUserPrincipalException();
    }
}
