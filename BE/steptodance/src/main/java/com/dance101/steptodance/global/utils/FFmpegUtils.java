package com.dance101.steptodance.global.utils;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FFmpegUtils {
	@Value("${ffmpeg.location}")
	private String ffmpegPath;

	@Value("${ffprobe.location}")
	private String ffprobePath;
}
