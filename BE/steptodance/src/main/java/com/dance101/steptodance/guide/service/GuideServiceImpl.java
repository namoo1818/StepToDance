package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.feedback.domain.Feedback;
import com.dance101.steptodance.feedback.repository.FeedbackRepository;
import com.dance101.steptodance.global.exception.category.NotFoundException;
import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;
import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.domain.Guide;
import com.dance101.steptodance.guide.repository.GuideRepository;
import com.dance101.steptodance.user.domain.User;
import com.dance101.steptodance.user.repository.UserRepository;
import com.dance101.steptodance.user.utils.UserUtils;
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
	private final UserRepository userRepository;
	private final FeedbackRepository feedbackRepository;

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
		// find guide & user
		Guide guide = guideRepository.findById(guideId)
			.orElseThrow(() -> new NotFoundException("GuideServiceImpl:createGuideFeedback", GUIDE_NOT_FOUND));
		User user = UserUtils.findUserById(userRepository, userId);

		// create & save feedback
		Feedback feedback = Feedback.builder()
			.videoUrl(guideFeedbackCreateRequest.videoUrl())
			.score(0.0)
			.thumbnailImgUrl(null)
			.guide(guide)
			.user(user)
			.build();
		Feedback savedFeedback = feedbackRepository.save(feedback);

		// create message & send to ai server
		FeedbackMessageRequest feedbackMessageRequest = FeedbackMessageRequest.builder()
			.id(savedFeedback.getId())
			.startAt(guideFeedbackCreateRequest.startAt())
			.endAt(guideFeedbackCreateRequest.endAt())
			.videoUrl(guideFeedbackCreateRequest.videoUrl())
			.guideUrl(guide.getVideoUrl())
			.highlightSectionStartAt(guide.getHighlightSectionStartAt())
			.highlightSectionEndAt(guide.getHighlightSectionEndAt())
			.build();
		aiServerService.publish(feedbackMessageRequest);

		return CompletableFuture.completedFuture(new FeedbackFindResponse(null, null));
	}
}
