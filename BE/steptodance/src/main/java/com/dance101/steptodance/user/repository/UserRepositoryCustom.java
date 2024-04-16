package com.dance101.steptodance.user.repository;

import com.dance101.steptodance.user.data.response.UserFindResponse;

import java.util.Optional;

public interface UserRepositoryCustom {
    Optional<UserFindResponse> findUserByUserId(long userId);
}
