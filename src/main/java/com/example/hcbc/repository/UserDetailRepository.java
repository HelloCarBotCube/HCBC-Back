package com.example.hcbc.repository;

import com.example.hcbc.entity.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailRepository extends JpaRepository<UserDetail, Long> {
    Optional<UserDetail> findByUserId(Long userId);
}
