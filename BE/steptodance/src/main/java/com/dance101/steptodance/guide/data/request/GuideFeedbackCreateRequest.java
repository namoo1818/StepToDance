package com.dance101.steptodance.guide.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalTime;

public record GuideFeedbackCreateRequest(
    @JsonProperty("start_at") LocalTime startAt,
    @JsonProperty("end_at") LocalTime endAt,
    @JsonProperty("video_url") String videoUrl
) {
}
