package com.dance101.steptodance.auth.data.response;

import lombok.Builder;

@Builder
public record TokenResponse(
    String accessToken,
    String refreshToken
) {
}
