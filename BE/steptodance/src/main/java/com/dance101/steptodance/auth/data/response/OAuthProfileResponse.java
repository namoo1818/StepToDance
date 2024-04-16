package com.dance101.steptodance.auth.data.response;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record OAuthProfileResponse(
    long id,
    LocalDateTime connectedAt,
    String nickname,
    String profileUrl
) {
}
