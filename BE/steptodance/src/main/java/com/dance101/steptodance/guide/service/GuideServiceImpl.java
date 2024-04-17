package com.dance101.steptodance.guide.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListFindResponse;
import com.dance101.steptodance.guide.repository.GuideRepository;

import lombok.RequiredArgsConstructor;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class GuideServiceImpl implements GuideService{
	private final GuideRepository guideRepository;
	@Override
	public GuideListFindResponse findGuideList(SearchConditions searchConditions) {
		return GuideListFindResponse.builder()
			.guideList(guideRepository.findGuideListWithSearchConditions(searchConditions))
			.build();
	}
}
