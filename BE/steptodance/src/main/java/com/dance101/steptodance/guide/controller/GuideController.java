package com.dance101.steptodance.guide.controller;

import com.dance101.steptodance.global.data.response.ApiResponse;
import com.dance101.steptodance.global.data.response.StatusCode;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.dance101.steptodance.global.data.response.StatusCode.*;
import static com.dance101.steptodance.global.data.response.StatusCode.SUCCESS_GUIDE_ONE;
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

	@GetMapping("/{guide_id}")
	public ResponseEntity<ApiResponse<GuideFindResponse>> findGuide(@PathVariable("guide_id") long guideId) {
		GuideFindResponse response = guideService.findGuide(guideId);
		return ApiResponse.toResponse(OK, SUCCESS_GUIDE_ONE, response);
	}
}
