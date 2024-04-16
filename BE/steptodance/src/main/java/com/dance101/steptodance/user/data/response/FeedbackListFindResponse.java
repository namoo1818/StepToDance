package com.dance101.steptodance.user.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public record FeedbackListFindResponse(
    @JsonProperty("id") long id,
    @JsonProperty("thumbnail_img_url") String thumbnailImgUrl,
    @JsonProperty("created_at") LocalDateTime createdAt,
    @JsonProperty("guide_id") long guideId,
    @JsonProperty("guide_title") String guideTitle,
    @JsonProperty("guide_singer") String guideSinger,
    @JsonProperty("guide_genre") String guideGenre
) {
}
