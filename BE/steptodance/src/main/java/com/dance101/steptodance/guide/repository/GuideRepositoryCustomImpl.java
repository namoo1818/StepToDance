package com.dance101.steptodance.guide.repository;

import com.dance101.steptodance.global.utils.QueryUtils;
import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import io.netty.util.internal.StringUtil;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import static com.dance101.steptodance.feedback.domain.QFeedback.feedback;
import static com.dance101.steptodance.guide.domain.QGuide.guide;

@RequiredArgsConstructor
public class GuideRepositoryCustomImpl implements GuideRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final QueryUtils queryUtils;

    @Override
    public List<GuideFindResponse> findGuideListWithSearchConditions(SearchConditions searchConditions) {
        if (searchConditions.getLimit() == null) {
            searchConditions.setLimit(10);
        }
        if (searchConditions.getOffset() == 0) {
            searchConditions.setOffset(0);
        }
        searchConditions.setOffset(
            (searchConditions.getOffset() - 1) * searchConditions.getLimit());
        return queryFactory.select(Projections.constructor(GuideFindResponse.class,
            guide.id,
            guide.videoUrl,
            guide.thumbnailImgUrl,
            guide.songTitle,
            guide.singer,
            guide.genre.name,
            queryUtils.createRankingSQL(feedback.count()),
            guide.user.nickname,
            feedback.count(),
            guide.createdAt))
            .from(guide).leftJoin(feedback).on(feedback.guide.id.eq(guide.id))
            .where(
                categorySearch(searchConditions.getCategory()),
                titleSearch(searchConditions.getTitle()),
                singerSearch(searchConditions.getSinger()),
                uploaderSearch(searchConditions.getUploader())
            )
            .groupBy(guide.id)
            .limit(searchConditions.getLimit())
            .offset(searchConditions.getOffset())
            .fetch();
    }

    @Override
    public Optional<GuideFindResponse> findGuideByGuideId(long guideId) {
        return Optional.ofNullable(
            queryFactory.select(Projections.constructor(GuideFindResponse.class,
                    guide.id,
                    guide.videoUrl,
                    guide.thumbnailImgUrl,
                    guide.songTitle,
                    guide.singer,
                    guide.genre.name,
                    queryUtils.createRankingSQL(feedback.count()),
                    guide.user.nickname,
                    feedback.count(),
                    guide.createdAt
                ))
                .from(guide)
                .where(guide.id.eq(guideId))
                .fetchOne()
        );
    }

    private BooleanExpression uploaderSearch(String uploader) {
        if (StringUtil.isNullOrEmpty(uploader)) {
            return null;
        }
        return guide.user.nickname.like("%"+uploader+"%");
    }

    private BooleanExpression singerSearch(String singer) {
        if (StringUtil.isNullOrEmpty(singer)) {
            return null;
        }
        return guide.singer.like("%"+singer+"%");
    }

    private BooleanExpression titleSearch(String title) {
        if (StringUtil.isNullOrEmpty(title)) {
            return null;
        }
        return guide.songTitle.like("%" + title + "%");
    }

    private BooleanExpression categorySearch(String category) {
        if (StringUtil.isNullOrEmpty(category)) {
            return null;
        }
        return guide.genre.name.like("%" + category+ "%");
    }

}
