package com.dance101.steptodance.feedback.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalTime;

public record SectionListResponse(
    @JsonProperty("start_at") LocalTime startAt
) {
}
