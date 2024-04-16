package com.dance101.steptodance.user.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record RankFindResponse(
    @JsonProperty("top_ranker_list") List<TopRankerListResponse> topRankerListResponse,
    @JsonProperty("my_info") MyRankResponse myRankResponse
) {
}
