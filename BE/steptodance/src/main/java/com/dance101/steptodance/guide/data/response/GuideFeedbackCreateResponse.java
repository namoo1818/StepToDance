package com.dance101.steptodance.guide.data.response;

import com.dance101.steptodance.feedback.data.response.SectionListResponse;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public record GuideFeedbackCreateResponse(
    @JsonProperty("score") double score,
    @JsonProperty("thumbnail_img_url") String thumnailImgUrl,
    @JsonProperty("incorrect_section_list") List<SectionListResponse> sectionListResponses
) {
}
