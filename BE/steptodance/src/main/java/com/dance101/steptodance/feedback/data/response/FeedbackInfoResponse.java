package com.dance101.steptodance.feedback.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalTime;

public record FeedbackInfoResponse(
    @JsonProperty("id") long id,
    @JsonProperty("score") double score,
    @JsonProperty("video_url") String url,
    @JsonProperty("guide_url") String guideUrl,
    @JsonProperty("highlight_section_start_at") LocalTime highlightSectionStartAt,
    @JsonProperty("highlight_section_end_at") LocalTime highlightSectionEndAt
) {
}
