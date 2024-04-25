package com.dance101.steptodance.auth.provider;

import com.dance101.steptodance.auth.service.UserDetailsServiceImpl;
import com.dance101.steptodance.auth.utils.SecurityUser;
import com.dance101.steptodance.global.exception.category.UnAuthorizedException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.*;
import java.util.stream.Collectors;

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.FORBIDDEN_USER;

@Slf4j
@Component
public class JwtTokenProvider {
    @Getter
    private final long ACCESS_TOKEN_EXPIRE_TIME = 30 * 24 * 60 * 60 * 1000L; // 30분
    @Getter
    private final long REFRESH_TOKEN_EXPIRE_TIME = 30 * 24 * 60 * 60 * 1000L; // 7일
    private final Key key;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    public JwtTokenProvider(@Value("${jwt.secret}") String key) {
        byte[] keyBytes = Decoders.BASE64.decode(key);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * User 정보를 가지고 AccessToken, RefreshToken을 생성하는 메소드
     *
     * @param id
     * @param authentication
     * @return
     */
    public Map<String, String> generateToken(Long id, Authentication authentication) {
        // find & create user info
        SecurityUser securityUser = new SecurityUser(id, String.valueOf(authentication.getPrincipal()));
        String authorities = securityUser.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.joining(","));

        // generate access token
        long now = (new Date()).getTime();
        String accessToken = createToken(now, id, ACCESS_TOKEN_EXPIRE_TIME, Jwts.builder()
            .claim("created", now)
            .claim("id", id)
            .claim("expiresIn", ACCESS_TOKEN_EXPIRE_TIME)
            .claim("auth", authorities));

        // generate refresh token
        String refreshToken = createToken(now, id, REFRESH_TOKEN_EXPIRE_TIME, Jwts.builder());
        HashMap<String, String> map = new HashMap<>();
        map.put("access", accessToken);
        map.put("refresh", refreshToken);

        // return tokens
        return map;
    }

    private String createToken(long now, Long id, long EXPIRE_TIME, JwtBuilder authentication) {
        Date tokenExpiresIn = new Date(now + EXPIRE_TIME);
        return authentication
            .setExpiration(tokenExpiresIn)
            .claim("id", id)
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();
    }

    /**
     * access token을 복호하하여 토큰에 들어있는 정보를 꺼내는 메소드
     *
     * @param accessToken
     * @return
     */
    public Authentication getAuthentication(String accessToken) {
        // get & validate claims
        Claims claims = parseClaims(accessToken);
        if (claims.get("auth") == null) {
            throw new UnAuthorizedException("JwtTokenProvider:getAuthentication", FORBIDDEN_USER);
        }

        // get security user
//        String id = claims.getSubject();
        String id = String.valueOf(claims.get("id"));
        SecurityUser securityUser = (SecurityUser) userDetailsService.loadUserByUsername(id);
        List<SimpleGrantedAuthority> authorities = Arrays.stream(claims.get("auth").toString().split(","))
            .map(SimpleGrantedAuthority::new)
            .toList();

        // return
        return new UsernamePasswordAuthenticationToken(securityUser, "", authorities);
    }

    /**
     * 토큰 정보를 검증하는 메서드
     *
     * @param token
     * @return
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
            throw e;
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
            throw e;
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
            throw e;
        } catch (IllegalArgumentException e) {
            log.info("JWT claims string is empty.", e);
        }
        return false;
    }

    public Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(accessToken)
                .getBody();
        } catch (ExpiredJwtException exception) {
            return exception.getClaims();
        }
    }
}
