package com.dance101.steptodance.infra;

import com.dance101.steptodance.guide.data.request.GuideFeedbackCreateRequest;
import com.dance101.steptodance.guide.data.response.GuideFeedbackCreateResponse;
import com.dance101.steptodance.guide.service.AIServerService;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class KafkaService implements AIServerService {
    private final KafkaTemplate<String, String> kafkaTemplate;
    @Value(value = "${message.topic.name}")
    private String topicName;

    @Override
    public void publish(GuideFeedbackCreateRequest feedbackCreateRequest) {
        // create message
        Map<String, Object> message = new HashMap<>();
        message.put("start_at", feedbackCreateRequest.startAt());
        message.put("end_at", feedbackCreateRequest.endAt());
        message.put("video_url", feedbackCreateRequest.videoUrl());

        // send message
        this.kafkaTemplate.send(topicName, message.toString());
    }

    @KafkaListener(topics = "${message.topic.name}", groupId = ConsumerConfig.GROUP_ID_CONFIG)
    @Override
    public void consume(GuideFeedbackCreateResponse guideFeedbackCreateResponse) {
        System.out.println(guideFeedbackCreateResponse.testMsg());
    }
}
