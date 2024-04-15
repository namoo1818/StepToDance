package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;

/**
 * 500 에러
 * 외부 서버와의 통신 오류
 */
public class ExternalServerException extends SteptodanceRuntimeException {
    protected static final String MESSAGE_KEY = "error.ExternalServer";

    public ExternalServerException(String detailMessageKey, ErrorCode errorCode, Object... params) {
        super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
    }
}
