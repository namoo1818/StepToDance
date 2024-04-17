package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;

public interface GuideService {
	GuideListFindResponse findGuideList(SearchConditions searchConditions);
}
