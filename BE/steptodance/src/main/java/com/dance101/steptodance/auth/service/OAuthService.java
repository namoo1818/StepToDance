package com.dance101.steptodance.auth.service;

import com.dance101.steptodance.auth.data.response.OAuthProfileResponse;
import com.dance101.steptodance.auth.data.response.OAuthTokenResponse;

public interface OAuthService {
    OAuthTokenResponse getAuthenticationFromKakao(String code);

    OAuthProfileResponse getUserInfoFromKakao(String accessToken);
}
