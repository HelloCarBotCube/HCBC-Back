package com.example.hcbc.domain.user.repository;

import com.example.hcbc.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
