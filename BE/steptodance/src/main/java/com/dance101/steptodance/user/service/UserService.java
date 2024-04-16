package com.dance101.steptodance.user.service;

import com.dance101.steptodance.user.data.response.MyPageResponse;

public interface UserService {
    void deleteUser(long userId);

    MyPageResponse findMyPage(long userId, int limit, int offset);
}
