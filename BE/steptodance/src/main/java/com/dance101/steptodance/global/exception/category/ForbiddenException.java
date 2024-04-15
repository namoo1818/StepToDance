package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;

/**
 * 403 에러
 * 다른 권한을 가진 사용자 필요.
 */
public class ForbiddenException extends SteptodanceRuntimeException {
    protected static final String MESSAGE_KEY = "error.Forbidden";

    public ForbiddenException(String detailMessageKey, ErrorCode errorCode, Object... params) {
        super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
    }
}
