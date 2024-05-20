package com.dance101.steptodance.feedback.repository;

import com.dance101.steptodance.feedback.data.response.FeedbackInfoResponse;
import com.dance101.steptodance.feedback.data.response.SectionListResponse;
import com.dance101.steptodance.user.data.response.FeedbackListFindResponse;

import java.util.List;
import java.util.Optional;

public interface FeedbackRepositoryCustom {
    List<FeedbackListFindResponse> findFeedbackListByUserId(long userId, int limit, int offset);

    Optional<FeedbackInfoResponse> findFeedbackByFeedbackId(long feedbackId);

    List<SectionListResponse> findSectionListByFeedbackId(long feedbackId);
}
