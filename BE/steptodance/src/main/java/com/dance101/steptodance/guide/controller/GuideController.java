package com.dance101.steptodance.guide.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dance101.steptodance.global.data.response.ApiResponse;
import com.dance101.steptodance.global.data.response.StatusCode;
import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.service.GuideService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/guides")
@RestController
public class GuideController {
	private final GuideService guideService;
	@GetMapping
	public ResponseEntity<ApiResponse<GuideListFindResponse>> findGuides(@ModelAttribute SearchConditions searchConditions) {
		GuideListFindResponse guideListFindResponse = guideService.findGuideList(searchConditions);
		return ApiResponse.toResponse(HttpStatus.OK, StatusCode.SUCCESS_GUIDE_LIST, guideListFindResponse);
	}
}
