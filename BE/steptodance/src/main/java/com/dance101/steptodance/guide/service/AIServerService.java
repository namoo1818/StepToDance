package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;
import com.dance101.steptodance.guide.data.request.GuideMessageRequest;

public interface AIServerService {
    void publish(GuideMessageRequest feedbackMessageRequest);

    void publish(FeedbackMessageRequest feedbackMessageRequest);
}
