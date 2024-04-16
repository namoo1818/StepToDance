package com.dance101.steptodance.user.repository;

import com.dance101.steptodance.user.data.response.MyRankResponse;
import com.dance101.steptodance.user.data.response.TopRankerListResponse;
import com.dance101.steptodance.user.data.response.UserFindResponse;

import java.util.List;
import java.util.Optional;

public interface UserRepositoryCustom {
    Optional<UserFindResponse> findUserByUserId(long userId);

    List<TopRankerListResponse> findTopRankerList();

    Optional<MyRankResponse> findMyRankInfo(long userId);
}
