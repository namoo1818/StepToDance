package com.dance101.steptodance.infra;

import com.dance101.steptodance.guide.data.request.FeedbackMessageRequest;
import com.dance101.steptodance.guide.service.AIServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

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

    @KafkaListener(topics = "${message.consumer.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void consume() {
        System.out.println();
    }
}
