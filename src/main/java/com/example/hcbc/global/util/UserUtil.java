package com.example.hcbc.global.util;

import com.example.hcbc.domain.auth.exception.NotFoundUserException;
import com.example.hcbc.domain.auth.exception.UnauthorizedException;
import com.example.hcbc.domain.user.entity.User;
import com.example.hcbc.domain.user.exception.InvalidUserPrincipalException;
import com.example.hcbc.domain.user.repository.UserRepository;
import com.example.hcbc.global.auth.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserUtil {

    private final UserRepository userRepository;

    public User getCurrentUser() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated() || auth instanceof AnonymousAuthenticationToken) {
            throw new UnauthorizedException();
        }

        Object principal = auth.getPrincipal();
        if (principal instanceof UserPrincipal userPrincipal) {
            String loginId = userPrincipal.getUsername();

            return userRepository.findByLoginId(loginId)
                    .orElseThrow(NotFoundUserException::new);
        }

        if (principal instanceof UserDetails userDetails) {
            return userRepository.findByLoginId(userDetails.getUsername())
                    .orElseThrow(NotFoundUserException::new);
        }

        Object p = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (p instanceof com.example.hcbc.global.websocket.WsPrincipal wsp) {
            Long userId = wsp.userId();
        }

        if (p instanceof com.example.hcbc.global.websocket.WsPrincipal wsp) {
            return userRepository.getById(wsp.userId());
        }

        if (p instanceof String loginId) {
            return userRepository.findByLoginId(loginId)
                    .orElseThrow(InvalidUserPrincipalException::new);
        }

        throw new InvalidUserPrincipalException();
    }
}
