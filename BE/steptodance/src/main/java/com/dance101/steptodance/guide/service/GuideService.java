package com.dance101.steptodance.guide.service;

import java.util.List;

import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListItem;

public interface GuideService {
	public List<GuideListItem> findGuideList(SearchConditions searchConditions);
}
