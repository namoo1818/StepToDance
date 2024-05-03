package com.dance101.steptodance.guide.data.request;

import java.io.Serializable;
import java.time.LocalTime;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class GuideUploadMultipartRequest implements Serializable {
	private long genreId;

	private String songName;

	private String singer;

	private LocalTime highlightStartAt;

	private LocalTime highlightEndAt;

	private MultipartFile video;
}