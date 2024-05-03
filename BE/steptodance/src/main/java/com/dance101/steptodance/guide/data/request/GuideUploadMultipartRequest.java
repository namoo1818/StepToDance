package com.dance101.steptodance.guide.data.request;

import java.time.LocalTime;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GuideUploadMultipartRequest(
	@JsonProperty("genre_id")
	long genreId,

	@JsonProperty("song_name")
	String songName,

	@JsonProperty("singer")
	String singer,

	@JsonProperty("highlight_section_start_at")
	LocalTime highlightStartAt,

	@JsonProperty("highlight_section_end_at")
	LocalTime highlightEndAt,

	@JsonProperty("video")
	MultipartFile video
){ }


// {
// 	"genre_id": 숫자,
// 	"song_title": "string 노래 제목",
// 	"singer": "string 가수",
// 	"highlight_section_start_at": mm:ss 형태의 시간,
// 	"highlight_section_end_at": mm:ss 형태의 시간,
// 	"video": 비디오 멀티파트
// }