package com.dance101.steptodance.user.repository;

import com.dance101.steptodance.global.utils.QueryUtils;
import com.dance101.steptodance.user.data.response.MyRankResponse;
import com.dance101.steptodance.user.data.response.TopRankerListResponse;
import com.dance101.steptodance.user.data.response.UserFindResponse;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import static com.dance101.steptodance.feedback.domain.QFeedback.feedback;
import static com.dance101.steptodance.user.domain.QUser.user;

@RequiredArgsConstructor
public class UserRepositoryCustomImpl implements UserRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final QueryUtils queryUtils;

    @Override
    public Optional<UserFindResponse> findUserByUserId(long userId) {
        return Optional.ofNullable(
            queryFactory.select(Projections.constructor(UserFindResponse.class,
                    user.profileImgUrl,
                    user.nickname,
                    ExpressionUtils.as(
                        JPAExpressions.select(queryUtils.createRankingSQL(feedback.score.sum()))
                            .from(feedback)
                            .groupBy(user.id)
                            .having(user.id.eq(userId)),
                        "userRank"
                    )
                ))
                .from(user)
                .where(user.id.eq(userId))
                .fetchOne()
        );
    }

    @Override
    public List<TopRankerListResponse> findTopRankerList() {
        return queryFactory.select(Projections.constructor(TopRankerListResponse.class,
                user.nickname,
                user.profileImgUrl,
                feedback.score.sum(),
                queryUtils.createRankingSQL(feedback.score.sum())
            ))
            .from(user)
            .leftJoin(feedback).on(feedback.user.id.eq(user.id))
            .groupBy(user.id)
            .orderBy(feedback.score.sum().desc())
            .limit(10)
            .fetch();
    }

    @Override
    public Optional<MyRankResponse> findMyRankInfo(long userId) {
        return Optional.ofNullable(
            queryFactory.select(Projections.constructor(MyRankResponse.class,
                    user.nickname,
                    user.profileImgUrl,
                    feedback.score.sum(),
                    queryUtils.createRankingSQL(feedback.score.sum())
                ))
                .from(user)
                .where(user.id.eq(userId))
                .leftJoin(feedback).on(feedback.user.id.eq(user.id))
                .groupBy(user.id)
                .fetchOne()
        );
    }
}
