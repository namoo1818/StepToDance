package com.dance101.steptodance.global.exception.data.response;

import lombok.Getter;

@Getter
public enum ErrorCode {
    // AUTH
    UNAUTHORIZED_USER(403, "인증이 필요한 서비스입니다.");

    private final int status;
    private final String message;

    ErrorCode(final int status, final String message) {
        this.status = status;
        this.message = message;
    }
}
