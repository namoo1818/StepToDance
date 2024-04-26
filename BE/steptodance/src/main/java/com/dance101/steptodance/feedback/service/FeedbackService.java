package com.dance101.steptodance.feedback.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.guide.data.response.GuideFeedbackCreateResponse;

public interface FeedbackService {
    FeedbackFindResponse findFeedback(long feedbackId);

    void deleteFeedback(long feedbackId);

    void updateFeedback(GuideFeedbackCreateResponse guideFeedbackCreateResponse);
}
