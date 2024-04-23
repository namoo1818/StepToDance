package com.dance101.steptodance.feedback.service;

import com.dance101.steptodance.feedback.data.response.FeedbackFindResponse;
import com.dance101.steptodance.feedback.data.response.FeedbackInfoResponse;
import com.dance101.steptodance.feedback.data.response.SectionListResponse;
import com.dance101.steptodance.feedback.domain.Feedback;
import com.dance101.steptodance.feedback.repository.FeedbackRepository;
import com.dance101.steptodance.global.exception.category.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.FEEDBACK_NOT_FOUND;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Override
    public FeedbackFindResponse findFeedback(long feedbackId) {
        // get feedback info
        FeedbackInfoResponse feedbackInfoResponse = feedbackRepository.findFeedbackByFeedbackId(feedbackId)
            .orElseThrow(() -> new NotFoundException("FeedbackServiceImpl:findFeedback", FEEDBACK_NOT_FOUND));

        // get incorrect sections
        List<SectionListResponse> sectionListResponses = feedbackRepository.findSectionListByFeedbackId(feedbackId);

        // create & return response
        return FeedbackFindResponse.builder()
            .feedbackInfoResponse(feedbackInfoResponse)
            .sectionListResponses(sectionListResponses)
            .build();
    }

    @Transactional
    @Override
    public void deleteFeedback(long feedbackId) {
        // get feedback
        Feedback feedback = feedbackRepository.findById(feedbackId)
            .orElseThrow(() -> new NotFoundException("FeedbackServiceImpl:deleteFeedback", FEEDBACK_NOT_FOUND));

        // delete
        feedbackRepository.delete(feedback);
    }
}
