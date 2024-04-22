package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;

public interface AIServerService {
    void send(GuideFeedbackCreateRequest guideFeedbackCreateRequest);
}
