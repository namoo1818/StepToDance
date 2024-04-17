package com.dance101.steptodance.guide.data.response;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GuideListFindResponse(
	@JsonProperty("guide_list") List<GuideListItem> guideList
){}