package com.dance101.steptodance.guide.data.request;

import lombok.Builder;

@Builder
public record GuideMessageRequest(
	long guideId,
	String name,
	int size,
	byte[] image
) {
}
