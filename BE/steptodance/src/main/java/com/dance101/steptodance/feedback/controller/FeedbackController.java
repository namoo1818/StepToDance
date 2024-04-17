package com.dance101.steptodance.feedback.controller;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.feedback.service.FeedbackService;
import com.dance101.steptodance.global.data.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import static com.dance101.steptodance.global.data.response.StatusCode.SUCCESS_FEEDBACK_DELETION;
import static com.dance101.steptodance.global.data.response.StatusCode.SUCCESS_FEEDBACK_ONE;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

@RequiredArgsConstructor
@RequestMapping("/feedbacks")
public class FeedbackController {
    private final FeedbackService feedbackService;

    @GetMapping("/{feedback_id}")
    public ResponseEntity<ApiResponse<FeedbackFindResponse>> findFeedback(@PathVariable("feedback_id") long feedbackId) {
        FeedbackFindResponse response = feedbackService.findFeedback(feedbackId);
        return ApiResponse.toResponse(OK, SUCCESS_FEEDBACK_ONE, response);
    }

    @DeleteMapping("/{feedback_id}")
    public ResponseEntity<ApiResponse<Void>> deleteFeedback(@PathVariable("feedback_id") long feedbackId) {
        feedbackService.deleteFeedback(feedbackId);
        return ApiResponse.toEmptyResponse(NO_CONTENT, SUCCESS_FEEDBACK_DELETION);
    }
}
