package com.dance101.steptodance.guide.data.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class SearchConditions {
	String category;
	String title;
	String singer;
	String uploader;
	Integer limit; // notnull을 끼고싶다
	Integer offset; // notnull을 끼고싶다
}
