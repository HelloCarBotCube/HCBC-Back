package com.example.hcbc.domain.user.repository;

import com.example.hcbc.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByLoginId(String loginId);
    Optional findByLoginId(String loginId);
    Optional findById(Long userId);
}
