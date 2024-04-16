package com.dance101.steptodance.auth.service;

import com.dance101.steptodance.auth.data.response.OAuthProfileResponse;
import com.dance101.steptodance.auth.data.response.OAuthTokenResponse;
import com.dance101.steptodance.auth.data.response.TokenResponse;
import com.dance101.steptodance.auth.provider.JwtTokenProvider;
import com.dance101.steptodance.user.domain.User;
import com.dance101.steptodance.user.repository.UserRepository;
import com.dance101.steptodance.user.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {
    private final OAuthService oAuthService;
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final StringRedisTemplate redisTemplate;

    @Transactional
    @Override
    public TokenResponse kakaoLogin(String code) {
        // get kakao login info
        OAuthProfileResponse oAuthProfileResponse = getLoginInfo(code);

        // check if first user & save
        long id = oAuthProfileResponse.id();
        if (isFirstLogin(id)) {
            User user = User.builder()
                .nickname(oAuthProfileResponse.nickname())
                .profileImgUrl(oAuthProfileResponse.profileUrl())
                .kakaoId(String.valueOf(oAuthProfileResponse.id()))
                .build();
            userRepository.save(user);
        }

        // get user
        User user = UserUtils.findUserByKakaoId(userRepository, String.valueOf(oAuthProfileResponse.id()));

        // create authentication & token
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getId(), Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));
        Map<String, String> tokenMap = jwtTokenProvider.generateToken(user.getId(), authentication);

        // save refresh token to redis
        saveRefreshToken("refresh:" + user.getId(), tokenMap.get("refresh"), jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME());

        // get refresh token & return
        return TokenResponse.builder()
            .accessToken(tokenMap.get("access"))
            .refreshToken(tokenMap.get("refresh"))
            .build();
    }

    private OAuthProfileResponse getLoginInfo(String code) {
        // get authentication token
        OAuthTokenResponse oAuthTokenResponse = oAuthService.getAuthenticationFromKakao(code);

        // get user info
        OAuthProfileResponse oAuthProfileResponse = oAuthService.getUserInfoFromKakao(oAuthTokenResponse.access_token());

        // create map & return
        return oAuthProfileResponse;
    }

    private boolean isFirstLogin(Long kakaoProfileId) {
        return !UserUtils.existsByKakaoId(userRepository, kakaoProfileId.toString());
    }

    private void saveRefreshToken(String key, String token, long expireIn) {
        redisTemplate.opsForValue().set(key, token, expireIn, TimeUnit.MILLISECONDS);
    }
}
