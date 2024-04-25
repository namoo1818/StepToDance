package com.dance101.steptodance.user.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserFindResponse(
    @JsonProperty("profile_img_url") String profileImgUrl,
    @JsonProperty("nickname") String nickname,
    @JsonProperty("user_rank") long ranking
) {
}
