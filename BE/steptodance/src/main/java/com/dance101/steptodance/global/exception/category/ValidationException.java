package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;

/**
 * 400 에러
 * 클라이언트가 입력한 값이 검증되지 않음
 */
public class ValidationException extends SteptodanceRuntimeException {
    protected static final String MESSAGE_KEY = "error.InValid";

    public ValidationException(String detailMessageKey, ErrorCode errorCode, Object... params) {
        super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
    }
}
