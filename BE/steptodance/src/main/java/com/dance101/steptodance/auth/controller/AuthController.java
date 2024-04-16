package com.dance101.steptodance.auth.controller;

import com.dance101.steptodance.auth.data.response.LoginResponse;
import com.dance101.steptodance.auth.data.response.TokenResponse;
import com.dance101.steptodance.auth.provider.CookieProvider;
import com.dance101.steptodance.auth.service.AuthService;
import com.dance101.steptodance.auth.utils.SecurityUser;
import com.dance101.steptodance.auth.utils.SecurityUtil;
import com.dance101.steptodance.global.data.response.ApiResponse;
import com.dance101.steptodance.global.exception.category.NotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.dance101.steptodance.global.data.response.StatusCode.*;
import static com.dance101.steptodance.global.exception.data.response.ErrorCode.COOKIE_NOT_FOUND;
import static org.springframework.http.HttpStatus.*;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class AuthController {
    private final AuthService authService;
    private final CookieProvider cookieProvider;

    @GetMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> kakaoLogin(@RequestParam("code") String code) {
        TokenResponse tokens = authService.kakaoLogin(code);
        ResponseCookie cookie = cookieProvider.createCookie(tokens.refreshToken());
        cookieProvider.addCookieHttpHeaders(cookie);
        LoginResponse response = LoginResponse.builder().accessToken(tokens.accessToken()).build();
        return ApiResponse.toResponse(CREATED, SUCCESS_LOGIN, response);
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(@AuthenticationPrincipal SecurityUser securityUser, HttpServletRequest request) {
        long userId = securityUser.getId();
        String accessToken = SecurityUtil.getAccessToken(request);
        authService.logout(userId, accessToken);
        return ApiResponse.toEmptyResponse(NO_CONTENT, SUCCESS_LOGOUT);
    }

    @PostMapping("/reissue")
    public ResponseEntity<ApiResponse<LoginResponse>> reissue(HttpServletRequest request) {
        String refreshToken = cookieProvider.getCookie(request, "refreshToken")
            .orElseThrow(() -> new NotFoundException("AuthController:reissue", COOKIE_NOT_FOUND)).getValue();
        TokenResponse tokens = authService.reissue(refreshToken);
        ResponseCookie cookie = cookieProvider.createCookie(tokens.refreshToken());
        cookieProvider.addCookieHttpHeaders(cookie);
        LoginResponse response = LoginResponse.builder().accessToken(tokens.accessToken()).build();
        return ApiResponse.toResponse(OK, SUCCESS_REISSUE, response);
    }
}
