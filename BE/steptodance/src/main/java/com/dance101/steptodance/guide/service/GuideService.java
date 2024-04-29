package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.request.GuideUploadRequest;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.FeedbackResponse;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;

import java.util.concurrent.CompletableFuture;

public interface GuideService {
	GuideListFindResponse findGuideList(SearchConditions searchConditions, long userId);
	void guideUpload(GuideUploadRequest guideUploadRequest);

	GuideFindResponse findGuide(long guideId);

	CompletableFuture<FeedbackResponse> createGuideFeedback(long userId, long guideId, GuideFeedbackCreateRequest guideFeedbackCreateRequest);
}
