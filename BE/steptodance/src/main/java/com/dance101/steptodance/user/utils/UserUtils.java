package com.dance101.steptodance.user.utils;

import com.dance101.steptodance.global.exception.category.NotFoundException;
import com.dance101.steptodance.user.domain.User;
import com.dance101.steptodance.user.repository.UserRepository;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.UNDEFINED_USER;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserUtils {
    public static User findUserById(UserRepository userRepository, long userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("UserUtils:findUserById", UNDEFINED_USER));
    }

    public static User findUserByKakaoId(UserRepository userRepository, String kakaoId) {
        return userRepository.findByKakaoId(kakaoId)
            .orElseThrow(() -> new NotFoundException("UserUtils:findUserByKakaoId", UNDEFINED_USER));
    }

    public static boolean existsByKakaoId(UserRepository userRepository, String kakaoId) {
        return userRepository.existsByKakaoId(kakaoId);
    }
}
