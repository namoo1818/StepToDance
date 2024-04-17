package com.dance101.steptodance.global.exception.data.response;

import lombok.Getter;

@Getter
public enum ErrorCode {
    // AUTH
    UNAUTHORIZED_USER(403, "인증이 필요한 서비스입니다."),
    FORBIDDEN_USER(403, "권한이 없는 서비스입니다."),
    COOKIE_NOT_FOUND(404, "쿠키를 찾을 수 없습니다."),
    REFRESH_TOKEN_NOT_FOUND(404, "리프레시 토큰을 찾을 수 없습니다."),
    // USER
    UNDEFINED_USER(404, "회원을 찾을 수 없습니다."),
    // FEEDBACK
    FEEDBACK_NOT_FOUND(404, "피드백을 찾을 수 없습니다.");

    private final int status;
    private final String message;

    ErrorCode(final int status, final String message) {
        this.status = status;
        this.message = message;
    }
}
