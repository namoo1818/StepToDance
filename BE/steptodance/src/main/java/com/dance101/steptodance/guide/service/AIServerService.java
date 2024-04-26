package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;

public interface AIServerService {
    void publish(FeedbackMessageRequest feedbackMessageRequest);
}
