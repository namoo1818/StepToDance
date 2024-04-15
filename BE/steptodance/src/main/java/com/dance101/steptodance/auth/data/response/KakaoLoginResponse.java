package com.dance101.steptodance.auth.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record KakaoLoginResponse(
    @JsonProperty("access_token") String accessToken
) {
}
