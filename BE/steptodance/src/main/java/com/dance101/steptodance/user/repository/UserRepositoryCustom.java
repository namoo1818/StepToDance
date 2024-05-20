package com.dance101.steptodance.user.repository;

import com.dance101.steptodance.user.data.response.TopRankerListResponse;

import java.util.List;

public interface UserRepositoryCustom {
    List<TopRankerListResponse> findTopRankerList();
}
