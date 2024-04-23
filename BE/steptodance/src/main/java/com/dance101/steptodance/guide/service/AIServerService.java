package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.response.GuideFeedbackCreateResponse;

public interface AIServerService {
    void publish(GuideFeedbackCreateRequest guideFeedbackCreateRequest);

    void consume(GuideFeedbackCreateResponse guideFeedbackCreateResponse);
}
