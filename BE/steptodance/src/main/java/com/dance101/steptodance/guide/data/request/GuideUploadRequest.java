package com.dance101.steptodance.guide.data.request;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GuideUploadRequest(
    @JsonProperty("video_url") String videoUrl
) {
}
