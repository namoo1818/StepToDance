package com.dance101.steptodance.guide.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.time.LocalTime;

@Builder
public record FeedbackMessageRequest(
    @JsonProperty("id") long id,
    @JsonProperty("start_at") LocalTime startAt,
    @JsonProperty("end_at") LocalTime endAt,
    @JsonProperty("video_url") String videoUrl,
    @JsonProperty("guide_url") String guideUrl,
    @JsonProperty("highlight_section_start_at") LocalTime highlightSectionStartAt,
    @JsonProperty("highlight_section_end_at") LocalTime highlightSectionEndAt
) {
}
