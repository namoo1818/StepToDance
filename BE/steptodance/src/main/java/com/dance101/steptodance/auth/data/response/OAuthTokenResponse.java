package com.dance101.steptodance.auth.data.response;

public record OAuthTokenResponse(
    String access_token,
    String refresh_token
) {
}
