package com.dance101.steptodance.user.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record MyPageResponse(
    @JsonProperty("user") UserFindResponse userFindResponse,
    @JsonProperty("feedback_list") List<FeedbackListFindResponse> feedbackListFindResponses
) {
}
