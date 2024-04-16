package com.dance101.steptodance.global.exception.category;

import com.dance101.steptodance.global.exception.data.response.ErrorCode;
import lombok.Getter;

/**
 * 최상위 커스텀 에러
 */
@Getter
public class SteptodanceRuntimeException extends RuntimeException {
    private final String messageKey;
    private final ErrorCode errorCode;
    private final Object[] params;

    public SteptodanceRuntimeException(String messageKey, ErrorCode errorCode, Object... params) {
        this.messageKey = messageKey;
        this.errorCode = errorCode;
        this.params = params;
    }
}
