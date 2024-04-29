package com.dance101.steptodance.guide.controller;

import com.dance101.steptodance.auth.utils.SecurityUser;
import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.global.data.response.ApiResponse;
import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.request.GuideUploadRequest;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import static com.dance101.steptodance.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RequiredArgsConstructor
@RequestMapping("/guides")
@RestController
public class GuideController {
	private final GuideService guideService;
	@GetMapping
	public ResponseEntity<ApiResponse<GuideListFindResponse>> findGuideList(@ModelAttribute SearchConditions searchConditions) {
		GuideListFindResponse response = guideService.findGuideList(searchConditions);
		return ApiResponse.toResponse(OK, SUCCESS_GUIDE_LIST, response);
	}

	@PostMapping
	public ResponseEntity<ApiResponse<Void>> uploadGuide(@RequestBody GuideUploadRequest guideUploadRequest) {
		guideService.guideUpload(guideUploadRequest);
		return ApiResponse.toEmptyResponse(CREATED, SUCCESS_GUIDE_ONE);
	}


	@GetMapping("/{guide_id}")
	public ResponseEntity<ApiResponse<GuideFindResponse>> findGuide(@PathVariable("guide_id") long guideId) {
		GuideFindResponse response = guideService.findGuide(guideId);
		return ApiResponse.toResponse(OK, SUCCESS_GUIDE_ONE, response);
	}

	@PostMapping("/{guide_id}")
	public ResponseEntity<ApiResponse<FeedbackFindResponse>> createGuideFeedback(
		@AuthenticationPrincipal SecurityUser securityUser, @PathVariable("guide_id") long guideId, @RequestBody GuideFeedbackCreateRequest guideFeedbackCreateRequest
	) throws ExecutionException, InterruptedException {
		long userId = securityUser.getId();
		CompletableFuture<FeedbackFindResponse> completableFuture = guideService.createGuideFeedback(userId, guideId, guideFeedbackCreateRequest);
		FeedbackFindResponse response = completableFuture.get();
		return ApiResponse.toResponse(CREATED, SUCCESS_FEEDBACK_CREATION, response);
	}

}
