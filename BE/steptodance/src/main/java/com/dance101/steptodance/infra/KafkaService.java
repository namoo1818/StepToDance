package com.dance101.steptodance.infra;

import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;
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
    private final KafkaTemplate<String, String> kafkaTemplate;
    @Value(value = "${message.topic.name}")
    private String topicName;

    @Override
    public void publish(FeedbackMessageRequest feedbackMessageRequest) {
        // send message
        this.kafkaTemplate.send(topicName, feedbackMessageRequest.toString());
    }

    @KafkaListener(topics = "${message.topic.name}", groupId = "step-to-dance")
    public void consume(String message) throws JsonProcessingException {
        log.info("==========================Kafka Consumer 실행==========================");
        log.info(message);
        // convert message to DTO
        ObjectMapper mapper = new ObjectMapper();
        GuideFeedbackCreateResponse response = mapper.readValue(message, GuideFeedbackCreateResponse.class);
        log.info(response.toString());
    }
}
