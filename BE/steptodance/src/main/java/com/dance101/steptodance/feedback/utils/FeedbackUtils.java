package com.dance101.steptodance.feedback.utils;

import com.dance101.steptodance.feedback.repository.FeedbackRepository;
import com.dance101.steptodance.user.data.response.FeedbackListFindResponse;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FeedbackUtils {
    public static List<FeedbackListFindResponse> findFeedbackListByUserId(FeedbackRepository feedbackRepository, long userId, int limit, int offset) {
        return feedbackRepository.findFeedbackListByUserId(userId, limit, offset);
    }
}
