package com.example.hcbc.domain.chat.repository;

import com.example.hcbc.domain.chat.entity.RoomMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomMemberRepository extends JpaRepository<RoomMember, Long> {
}
