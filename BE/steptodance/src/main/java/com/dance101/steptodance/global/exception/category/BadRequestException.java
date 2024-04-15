package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;

/**
 * 400 에러
 * 문법등의 오류로 서버가 요청사항을 이해하지 못함
 */
public class BadRequestException extends SteptodanceRuntimeException {
    protected static final String MESSAGE_KEY = "error.BadRequest";

    public BadRequestException(String detailMessageKey, ErrorCode errorCode, Object... params) {
        super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
    }
}
