package com.dance101.steptodance.guide.repository;

import java.util.List;

import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListItem;

public interface GuideRepositoryCustom {
    List<GuideListItem> findGuideListByUserId(SearchConditions searchConditions);
}
