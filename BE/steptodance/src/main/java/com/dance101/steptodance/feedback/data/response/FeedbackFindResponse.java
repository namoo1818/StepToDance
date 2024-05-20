package com.dance101.steptodance.feedback.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record FeedbackFindResponse(
    @JsonProperty("feedback") FeedbackInfoResponse feedbackInfoResponse,
    @JsonProperty("incorrect_section_list") List<SectionListResponse> sectionListResponses
) {
}
