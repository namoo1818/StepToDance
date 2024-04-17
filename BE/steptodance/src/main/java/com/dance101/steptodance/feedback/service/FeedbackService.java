package com.dance101.steptodance.feedback.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;

public interface FeedbackService {
    FeedbackFindResponse findFeedback(long feedbackId);
}
