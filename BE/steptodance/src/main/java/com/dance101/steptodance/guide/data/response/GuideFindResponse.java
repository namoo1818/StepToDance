package com.dance101.steptodance.guide.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public record GuideFindResponse(
	@JsonProperty("id") long id,
	@JsonProperty("video_url") String videoUrl,
	@JsonProperty("thumbnail_img_url") String thumbnailImgUrl,
	@JsonProperty("song_title") String songTitle,
	@JsonProperty("singer") String singer,
	@JsonProperty("genre") String genre,
	@JsonProperty("rank") int rank,
	@JsonProperty("uploader") String uploader,
	@JsonProperty("count_feedback") int countFeedback,
	@JsonProperty("created_at") LocalDateTime createdAt
) {

}
