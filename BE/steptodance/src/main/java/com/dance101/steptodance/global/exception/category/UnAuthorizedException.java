package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;

/**
 * 401 에러
 * 로그인이 필요한 요청에 로그인을 하지 않아 발생
 */
public class UnAuthorizedException extends SteptodanceRuntimeException {
    protected static final String MESSAGE_KEY = "error.UnAuthorized";

    public UnAuthorizedException(String detailMessageKey, ErrorCode errorCode, Object... params) {
        super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
    }
}
