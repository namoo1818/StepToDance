package com.dance101.steptodance.auth.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record LoginResponse(
    @JsonProperty("access_token") String accessToken,
    @JsonProperty("nickname") String nickname,
    @JsonProperty("profile_img_url") String profileImgUrl
) {
}
