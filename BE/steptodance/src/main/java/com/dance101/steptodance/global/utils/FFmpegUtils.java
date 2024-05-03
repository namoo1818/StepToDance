package com.dance101.steptodance.global.utils;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import net.bramp.ffmpeg.FFmpeg;
import net.bramp.ffmpeg.FFprobe;

@Component
public class FFmpegUtils {
	private final String ffmpegPath;
	private final String ffprobePath;
	private final FFmpeg ffmpeg;
	private final FFprobe fFprobe;

	public FFmpegUtils(
		@Value("${ffmpeg.location}")String ffmpegPath,
		@Value("${ffprobe.location}")String ffprobePath
	) throws IOException {
		this.ffmpegPath = ffmpegPath;
		this.ffprobePath = ffprobePath;
		ffmpeg = new FFmpeg(this.ffmpegPath);
		fFprobe = new FFprobe(this.ffprobePath);
	}
}
