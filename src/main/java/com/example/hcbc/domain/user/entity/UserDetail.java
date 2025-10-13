// src/main/java/com/example/hcbc/entity/UserDetail.java
package com.example.hcbc.domain.user.entity;

import com.example.hcbc.global.common.enums.Category;
import com.example.hcbc.global.common.enums.Gender;
import jakarta.persistence.*;
import lombok.*;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
@Entity
@Table(name = "userdetail")
public class UserDetail {

    @Id
    @Column(name = "user_id")
    private Long userId;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "address")
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender", length = 10)
    private Gender gender;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "userdetail_categories", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "category", length = 32)
    @Builder.Default
    private Set<Category> categories = new LinkedHashSet<>();
}
