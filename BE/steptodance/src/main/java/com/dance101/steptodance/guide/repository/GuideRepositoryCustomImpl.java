package com.dance101.steptodance.guide.repository;

import static com.dance101.steptodance.feedback.domain.QFeedback.*;
import static com.dance101.steptodance.guide.domain.QGuide.*;

import java.util.List;

import com.dance101.steptodance.global.utils.QueryUtils;
import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListItem;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import io.netty.util.internal.StringUtil;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class GuideRepositoryCustomImpl implements GuideRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final QueryUtils queryUtils;

    @Override
    public List<GuideListItem> findGuideListWithSearchConditions(SearchConditions searchConditions) {
        return queryFactory.select(Projections.constructor(GuideListItem.class,
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
