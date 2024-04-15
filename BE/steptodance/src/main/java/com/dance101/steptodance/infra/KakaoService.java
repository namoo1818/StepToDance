package com.dance101.steptodance.infra;

import com.dance101.steptodance.auth.data.response.OAuthProfileResponse;
import com.dance101.steptodance.auth.data.response.OAuthTokenResponse;
import com.dance101.steptodance.auth.service.OAuthService;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RequiredArgsConstructor
@Service
public class KakaoService implements OAuthService {
    private final String REQUEST_OAUTH_URL = "https://kauth.kakao.com/oauth/token";
    private final String REQUEST_PROFILE_URL = "https://kapi.kakao.com/v2/user/me";
    @Value(value = "${kakao.key}")
    private String apiKey;
    @Value(value = "${kakao.redirectUri}")
    private String redirectUri;

    @Override
    public OAuthTokenResponse getAuthenticationFromKakao(String code) {
        RestTemplate template = new RestTemplate();

        // set http header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded");

        // set http body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", apiKey);
        params.add("redirect_uri", redirectUri);
        params.add("code", code);

        // create & send http request
        HttpEntity<MultiValueMap<String, String>> tokenRequest = new HttpEntity<>(params, headers);
        ResponseEntity<String> response = template.exchange(REQUEST_OAUTH_URL, HttpMethod.POST, tokenRequest, String.class);
        String responseBody = response.getBody();

        // extract token from body
        Gson gson = new Gson();
        OAuthTokenResponse oAuthTokenResponse = gson.fromJson(responseBody, OAuthTokenResponse.class);

        return oAuthTokenResponse;
    }

    @Override
    public OAuthProfileResponse getUserInfoFromKakao(String accessToken) {
        RestTemplate template = new RestTemplate();

        // set http header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded");

        // create & send http request
        HttpEntity<MultiValueMap<String, String>> profileRequest = new HttpEntity<>(headers);
        ResponseEntity<String> response = template.exchange(REQUEST_PROFILE_URL, HttpMethod.POST, profileRequest, String.class);
        OAuthProfileResponse oAuthProfileResponse = createProfileResponse(response.getBody());

        return oAuthProfileResponse;
    }

    private OAuthProfileResponse createProfileResponse(String responseBody) {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(responseBody);

        long id = element.getAsJsonObject().get("id").getAsLong();

        String connected_at = element.getAsJsonObject().get("connected_at").getAsString();
        connected_at = connected_at.substring(0, connected_at.length() - 1);
        LocalDateTime connectedAt = LocalDateTime.parse(connected_at, DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));

        String nickname = element.getAsJsonObject().get("nickname").getAsString();

        JsonElement property = element.getAsJsonObject().get("properties");
        String profileUrl = property.getAsJsonObject().get("profile_image").getAsString();

        return OAuthProfileResponse.builder()
            .id(id)
            .connectedAt(connectedAt)
            .nickname(nickname)
            .profileUrl(profileUrl)
            .build();
    }
}
