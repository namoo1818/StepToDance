package com.dance101.steptodance.user.repository;

import com.dance101.steptodance.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
    boolean existsByKakaoId(String kakaoId);

    Optional<User> findByKakaoId(String kakaoId);
}
