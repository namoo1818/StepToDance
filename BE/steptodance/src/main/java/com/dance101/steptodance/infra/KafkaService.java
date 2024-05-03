package com.dance101.steptodance.infra;

import com.dance101.steptodance.feedback.service.FeedbackService;
import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;
import com.dance101.steptodance.guide.data.request.GuideMessageRequest;
import com.dance101.steptodance.guide.data.response.GuideFeedbackCreateResponse;
import com.dance101.steptodance.guide.service.AIServerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class KafkaService implements AIServerService {
    private final FeedbackService feedbackService;
    private final KafkaTemplate<String, String> kafkaTemplate;
    @Value(value = "${message.topic.feedback.name}")
    private String feedbackTopicName;
    @Value(value = "${message.topic.guide.name}")
    private String guideTopicName;

    @Override
    public void publish(GuideMessageRequest guideMessageRequest) {
        // send message
        log.info("KafkaService::publish : ===========" + guideMessageRequest.name() + " 전송 ===========");
        this.kafkaTemplate.send(guideTopicName, guideMessageRequest.toString());
    }

    @Override
    public void publish(FeedbackMessageRequest feedbackMessageRequest) {
        // send message
        this.kafkaTemplate.send(feedbackTopicName, feedbackMessageRequest.toString());
    }

    @KafkaListener(topics = "${message.topic.name}", groupId = "step-to-dance")
    public void consume(String message) throws JsonProcessingException {
        // convert message to DTO
        ObjectMapper mapper = new ObjectMapper();
        GuideFeedbackCreateResponse response = mapper.readValue(message, GuideFeedbackCreateResponse.class);

        // update & save result
        feedbackService.updateFeedback(response);
    }
}
