package com.dance101.steptodance.auth.provider;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CookieProvider {
    /**
     * http cookie 생성
     *
     * @param refreshToken
     * @return
     */
    public ResponseCookie createCookie(String refreshToken) {
        return ResponseCookie.from("refreshToken", refreshToken)
            .maxAge(7 * 24 * 60 * 60)
            .path("/")
            .secure(true)
            .sameSite("None")
            .httpOnly(true)
            .build();
    }

    /**
     * http cookie 추출
     *
     * @param request
     * @param name
     * @return
     */
    public Optional<Cookie> getCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    return Optional.of(cookie);
                }
            }
        }
        return Optional.empty();
    }

    /**
     * 헤더에 쿠키 담기
     *
     * @param cookie
     * @return
     */
    public HttpHeaders addCookieHttpHeaders(ResponseCookie cookie) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE, cookie.toString());
        return headers;
    }
}
