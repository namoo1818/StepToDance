package com.dance101.steptodance.auth.service;

import com.dance101.steptodance.auth.data.response.OAuthProfileResponse;
import com.dance101.steptodance.auth.data.response.OAuthTokenResponse;
import com.dance101.steptodance.auth.data.response.TokenResponse;
import com.dance101.steptodance.auth.provider.JwtTokenProvider;
import com.dance101.steptodance.global.exception.category.NotFoundException;
import com.dance101.steptodance.global.exception.category.UnAuthorizedException;
import com.dance101.steptodance.user.domain.User;
import com.dance101.steptodance.user.repository.UserRepository;
import com.dance101.steptodance.user.utils.UserUtils;
import io.jsonwebtoken.Claims;
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

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.REFRESH_TOKEN_NOT_FOUND;
import static com.dance101.steptodance.global.exception.data.response.ErrorCode.UNAUTHORIZED_USER;

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
        Map<String, String> tokenMap = createTokens(user.getId());

        // save refresh token to redis
        saveRefreshToken("refresh:" + user.getId(), tokenMap.get("refresh"), jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME());

        // get refresh token & return
        return TokenResponse.builder()
            .accessToken(tokenMap.get("access"))
            .refreshToken(tokenMap.get("refresh"))
            .nickname(user.getNickname())
            .profileImgUrl(user.getProfileImgUrl())
            .build();
    }

    @Override
    public void logout(long userId, String accessToken) {
        // check if refresh token expired & delete
        if (isRefreshTokenExpired(userId)) {
            redisTemplate.delete("refresh:" + userId);
        }

        // add access token to a blacklist
        addAccessTokenAsABlacklist(accessToken);
    }

    @Override
    public TokenResponse reissue(String refreshToken) {
        // check refresh token if null
        if (refreshToken == null) {
            throw new NotFoundException("AuthServiceImpl:reissue", REFRESH_TOKEN_NOT_FOUND);
        }

        // get user info & check if expired
        Claims claims = jwtTokenProvider.parseClaims(refreshToken);
        long id = Long.parseLong(claims.get("id").toString());
        if (isRefreshTokenExpired(id)) {
            throw new UnAuthorizedException("AuthServiceImpl:reissue", UNAUTHORIZED_USER);
        }

        // get user
        User user = UserUtils.findUserById(userRepository, id);

        // create authentication & token
        Map<String, String> tokenMap = createTokens(user.getId());

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

    private Map<String, String> createTokens(long userId) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(userId, Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));
        Map<String, String> tokenMap = jwtTokenProvider.generateToken(userId, authentication);
        return tokenMap;
    }

    private boolean isFirstLogin(Long kakaoProfileId) {
        return !UserUtils.existsByKakaoId(userRepository, kakaoProfileId.toString());
    }

    private void saveRefreshToken(String key, String token, long expireIn) {
        redisTemplate.opsForValue().set(key, token, expireIn, TimeUnit.MILLISECONDS);
    }

    private boolean isRefreshTokenExpired(long userId) {
        return redisTemplate.opsForValue().get("refresh:" + userId) == null;
    }

    private void addAccessTokenAsABlacklist(String token) {
        redisTemplate.opsForValue().set("blacklist:" + token, token, jwtTokenProvider.getACCESS_TOKEN_EXPIRE_TIME(), TimeUnit.MILLISECONDS);
    }
}
