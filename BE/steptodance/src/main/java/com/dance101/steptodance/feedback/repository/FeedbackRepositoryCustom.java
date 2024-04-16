package com.dance101.steptodance.feedback.repository;

import com.dance101.steptodance.user.data.response.FeedbackListFindResponse;

import java.util.List;

public interface FeedbackRepositoryCustom {
    List<FeedbackListFindResponse> findFeedbackListByUserId(long userId, int limit, int offset);
}
