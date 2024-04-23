package com.dance101.steptodance.feedback.repository;

import com.dance101.steptodance.feedback.data.response.FeedbackInfoResponse;
import com.dance101.steptodance.feedback.data.response.SectionListResponse;
import com.dance101.steptodance.user.data.response.FeedbackListFindResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import static com.dance101.steptodance.feedback.domain.QFeedback.feedback;
import static com.dance101.steptodance.feedback.domain.QTimestamp.timestamp;
import static com.dance101.steptodance.guide.domain.QGenre.genre;
import static com.dance101.steptodance.guide.domain.QGuide.guide;

@RequiredArgsConstructor
public class FeedbackRepositoryCustomImpl implements FeedbackRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<FeedbackListFindResponse> findFeedbackListByUserId(long userId, int limit, int offset) {
        return queryFactory.select(Projections.constructor(FeedbackListFindResponse.class,
                feedback.id,
                feedback.thumbnailImgUrl,
                feedback.createdAt,
                guide.id,
                guide.songTitle,
                guide.singer,
                genre.name
            ))
            .from(feedback)
            .innerJoin(guide).on(guide.id.eq(feedback.guide.id))
            .innerJoin(genre).on(genre.id.eq(guide.genre.id))
            .where(feedback.user.id.eq(userId))
            .offset(offset)
            .limit(limit)
            .fetch();
    }

    @Override
    public Optional<FeedbackInfoResponse> findFeedbackByFeedbackId(long feedbackId) {
        return Optional.ofNullable(
            queryFactory.select(Projections.constructor(FeedbackInfoResponse.class,
                    feedback.score,
                    feedback.videoUrl
                ))
                .from(feedback)
                .where(feedback.id.eq(feedbackId))
                .fetchOne()
        );
    }

    @Override
    public List<SectionListResponse> findSectionListByFeedbackId(long feedbackId) {
        return queryFactory.select(Projections.constructor(SectionListResponse.class,
                timestamp.startAt
            ))
            .from(timestamp)
            .innerJoin(feedback).on(feedback.id.eq(timestamp.feedback.id))
            .where(feedback.id.eq(feedbackId))
            .fetch();
    }
}
