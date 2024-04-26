package com.dance101.steptodance.guide.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalTime;
import java.util.List;

public record GuideFeedbackCreateResponse(
    @JsonProperty("id") long id,
    @JsonProperty("score") double score,
    @JsonProperty("thumbnail_img_url") String thumbnailImgUrl,
    @JsonProperty("incorrect_section_list") List<LocalTime> sectionListResponses
) {
}
