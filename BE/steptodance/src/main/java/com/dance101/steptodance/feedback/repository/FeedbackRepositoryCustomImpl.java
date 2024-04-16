package com.dance101.steptodance.feedback.repository;

import com.dance101.steptodance.user.data.response.FeedbackListFindResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.dance101.steptodance.feedback.domain.QFeedback.feedback;
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
}
