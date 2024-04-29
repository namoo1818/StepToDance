package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.global.exception.category.ExternalServerException;
import com.dance101.steptodance.global.exception.category.NotFoundException;
import com.dance101.steptodance.global.exception.data.response.ErrorCode;
import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.request.GuideUploadRequest;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.repository.GuideRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.*;
import static com.dance101.steptodance.global.exception.data.response.ErrorCode.GUIDE_NOT_FOUND;

@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class GuideServiceImpl implements GuideService{
	private final GuideRepository guideRepository;
	private final AIServerService aiServerService;
	// private final String AIServer_URL = "https://steptodance.site:8000";
	private final String AIServer_URL = "https://k10a101.p.ssafy.io:8000";

	@Override
	public GuideListFindResponse findGuideList(SearchConditions searchConditions) {
		// get response
		List<GuideFindResponse> guideFindResponses = guideRepository.findGuideListWithSearchConditions(searchConditions);

		// create response & return
		return GuideListFindResponse.builder()
			.guideList(guideFindResponses)
			.build();
	}

	@Async
	@Transactional
	@Override
	public void guideUpload(GuideUploadRequest guideUploadRequest) {
		try {
			HttpHeaders headers = new HttpHeaders();
			headers.setAccept(Arrays.asList(new MediaType[] {MediaType.APPLICATION_JSON}));
			HttpEntity<GuideUploadRequest> entity = new HttpEntity<>(guideUploadRequest, headers);

			RestTemplate restTemplate = new RestTemplate();
			ResponseEntity<String> response = restTemplate.exchange(AIServer_URL + "/guides/upload", HttpMethod.POST, entity, String.class);
		} catch (Exception e) {
			throw new ExternalServerException("GuideServiceImpl:guidUpload", GUIDE_UPLOAD_FAILED);
		}
	}

	@Override
	public GuideFindResponse findGuide(long guideId) {
		// get guide response & return
		return guideRepository.findGuideByGuideId(guideId)
			.orElseThrow(() -> new NotFoundException("GuideServiceImpl:findGuide", GUIDE_NOT_FOUND));
	}

	@Async
	@Transactional
	@Override
	public CompletableFuture<FeedbackFindResponse> createGuideFeedback(long userId, long guideId, GuideFeedbackCreateRequest guideFeedbackCreateRequest) {
		System.out.println("============================================");
		System.out.println(guideFeedbackCreateRequest.startAt());
		System.out.println(guideFeedbackCreateRequest.endAt());
		System.out.println(guideFeedbackCreateRequest.videoUrl());
		System.out.println("============================================");

		aiServerService.publish(guideFeedbackCreateRequest);

		return CompletableFuture.completedFuture(new FeedbackFindResponse(null, null));
	}
}
