package com.dance101.steptodance.guide.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record FeedbackResponse(
    @JsonProperty("id") long id
) {
}
