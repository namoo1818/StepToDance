package com.dance101.steptodance.guide.data;

import lombok.Getter;

@Getter
public class SearchConditions {
	String category;
	String title;
	String singer;
	String uploader;
	int limit; // notnull을 끼고싶다
	int offset; // notnull을 끼고싶다
}
