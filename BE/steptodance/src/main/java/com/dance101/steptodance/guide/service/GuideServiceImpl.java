package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.global.exception.category.NotFoundException;
import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.repository.GuideRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.GUIDE_NOT_FOUND;

@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class GuideServiceImpl implements GuideService{
	private final GuideRepository guideRepository;
	private final AIServerService aiServerService;

	@Override
	public GuideListFindResponse findGuideList(SearchConditions searchConditions, long userId) {
		// get response
		List<GuideFindResponse> guideFindResponses = guideRepository.findGuideListWithSearchConditions(searchConditions, userId);

		// create response & return
		return GuideListFindResponse.builder()
			.guideList(guideFindResponses)
			.build();
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
