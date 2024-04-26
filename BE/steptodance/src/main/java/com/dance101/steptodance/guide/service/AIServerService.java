package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;
import com.dance101.steptodance.guide.data.response.GuideFeedbackCreateResponse;

public interface AIServerService {
    void publish(FeedbackMessageRequest feedbackMessageRequest);

    void consume(GuideFeedbackCreateResponse guideFeedbackCreateResponse);
}
