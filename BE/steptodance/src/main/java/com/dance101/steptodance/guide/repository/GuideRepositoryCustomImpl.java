package com.dance101.steptodance.guide.repository;

import static com.dance101.steptodance.feedback.domain.QFeedback.*;
import static com.dance101.steptodance.guide.domain.QGuide.*;

import java.util.List;

import com.dance101.steptodance.global.utils.QueryUtils;
import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListItem;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class GuideRepositoryCustomImpl implements GuideRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final QueryUtils queryUtils;

    @Override
    public List<GuideListItem> findGuideListByUserId(SearchConditions searchConditions) {
        return queryFactory.select(Projections.constructor(GuideListItem.class,
            guide.id,
            guide.videoUrl,
            guide.thumbnailImgUrl,
            guide.songTitle,
            guide.singer,
            guide.genre.name,
            queryUtils.createGuideRankingSQL(feedback.count()),
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

    private Predicate uploaderSearch(String uploader) {
        if (uploader == null) {
            return null;
        }
        return guide.user.nickname.like("%"+uploader+"%");
    }

    private Predicate singerSearch(String singer) {
        if (singer == null) {
            return null;
        }
        return guide.singer.like("%"+singer+"%");
    }

    private Predicate titleSearch(String title) {
        if (title == null) {
            return null;
        }
        return guide.songTitle.like("%" + title + "%");
    }

    private Predicate categorySearch(String category) {
        if (category == null) {
            return null;
        }
        return guide.genre.name.like("%" + category+ "%");
    }

}
