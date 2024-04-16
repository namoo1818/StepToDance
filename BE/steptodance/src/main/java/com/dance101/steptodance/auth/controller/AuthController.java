package com.dance101.steptodance.auth.controller;

import com.dance101.steptodance.auth.data.response.KakaoLoginResponse;
import com.dance101.steptodance.auth.data.response.TokenResponse;
import com.dance101.steptodance.auth.provider.CookieProvider;
import com.dance101.steptodance.auth.service.AuthService;
import com.dance101.steptodance.global.data.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.dance101.steptodance.global.data.response.StatusCode.SUCCESS_LOGIN;
import static org.springframework.http.HttpStatus.CREATED;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class AuthController {
    private final AuthService authService;
    private final CookieProvider cookieProvider;

    @GetMapping("/login")
    public ResponseEntity<ApiResponse<KakaoLoginResponse>> kakaoLogin(@RequestParam("code") String code) {
        TokenResponse tokens = authService.kakaoLogin(code);
        ResponseCookie cookie = cookieProvider.createCookie(tokens.refreshToken());
        cookieProvider.addCookieHttpHeaders(cookie);
        KakaoLoginResponse response = KakaoLoginResponse.builder().accessToken(tokens.accessToken()).build();
        return ApiResponse.toResponse(CREATED, SUCCESS_LOGIN, response);
    }
}
