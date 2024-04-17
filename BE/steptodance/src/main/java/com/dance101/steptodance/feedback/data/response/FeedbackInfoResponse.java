package com.dance101.steptodance.feedback.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record FeedbackInfoResponse(
    @JsonProperty("score") double score,
    @JsonProperty("video_url") String url
) {
}
