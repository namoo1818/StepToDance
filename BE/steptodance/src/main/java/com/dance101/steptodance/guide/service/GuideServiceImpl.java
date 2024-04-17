package com.dance101.steptodance.guide.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dance101.steptodance.guide.data.SearchConditions;
import com.dance101.steptodance.guide.data.response.GuideListItem;
import com.querydsl.core.QueryFactory;

import lombok.RequiredArgsConstructor;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class GuideServiceImpl implements GuideService{
	@Override
	public List<GuideListItem> findGuideList(SearchConditions searchConditions) {

		return null;
	}
}
