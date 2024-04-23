package com.dance101.steptodance.guide.service;

import com.dance101.steptodance.guide.data.request.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideFindResponse;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;

public interface GuideService {
	GuideListFindResponse findGuideList(SearchConditions searchConditions);

	GuideFindResponse findGuide(long guideId);
}
