package com.dance101.steptodance.auth.controller;

import static com.dance101.steptodance.global.data.response.StatusCode.*;
import static com.dance101.steptodance.global.exception.data.response.ErrorCode.*;
import static org.springframework.http.HttpStatus.*;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dance101.steptodance.auth.data.response.LoginResponse;
import com.dance101.steptodance.auth.data.response.TokenResponse;
import com.dance101.steptodance.auth.provider.CookieProvider;
import com.dance101.steptodance.auth.service.AuthService;
import com.dance101.steptodance.auth.utils.SecurityUser;
import com.dance101.steptodance.auth.utils.SecurityUtil;
import com.dance101.steptodance.global.data.response.ApiResponse;
import com.dance101.steptodance.global.exception.category.NotFoundException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class AuthController {
    private final AuthService authService;
    private final CookieProvider cookieProvider;

    @GetMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> kakaoLogin(@RequestParam("code") String code) {
        // prepare data
        TokenResponse tokens = authService.kakaoLogin(code);
        ResponseCookie cookie = cookieProvider.createCookie(tokens.refreshToken());
        HttpHeaders headers = cookieProvider.addCookieHttpHeaders(cookie);
        LoginResponse response = LoginResponse.builder()
            .accessToken(tokens.accessToken())
            .nickname(tokens.nickname())
            .profileImgUrl(tokens.profileImgUrl())
            .build();

        // create response
        ApiResponse<LoginResponse> apiResponse = ApiResponse.<LoginResponse>builder()
            .status(SUCCESS_LOGIN.getStatus())
            .message(SUCCESS_LOGIN.getMessage())
            .data(response)
            .build();

        // put & return
        return ResponseEntity
            .status(CREATED)
            .headers(headers)
            .body(apiResponse);
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(@AuthenticationPrincipal SecurityUser securityUser, HttpServletRequest request) {
        long userId = securityUser.getId();
        String accessToken = SecurityUtil.getAccessToken(request);
        authService.logout(userId, accessToken);
        return ApiResponse.toEmptyResponse(NO_CONTENT, SUCCESS_LOGOUT);
    }

    @PostMapping("/reissue")
    public ResponseEntity<ApiResponse<LoginResponse>> reissue(
        HttpServletRequest request,
        HttpServletResponse httpResponse
    ) {
        String refreshToken = cookieProvider.getCookie(request, "refreshToken")
            .orElseThrow(() -> new NotFoundException("AuthController:reissue", COOKIE_NOT_FOUND)).getValue();
        TokenResponse tokens = authService.reissue(refreshToken);
        ResponseCookie cookie = cookieProvider.createCookie(tokens.refreshToken());
        httpResponse.setHeader("Set-Cookie", cookie.toString());
        LoginResponse response = LoginResponse.builder().accessToken(tokens.accessToken()).build();
        return ApiResponse.toResponse(OK, SUCCESS_REISSUE, response);
    }
}
