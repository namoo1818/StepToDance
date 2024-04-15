package com.dance101.steptodance.auth.utils;

import com.dance101.steptodance.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@NoArgsConstructor
@Getter
public class SecurityUser implements UserDetails {
    private Long id;
    private String nickname;

    public SecurityUser(User user) {
        this.id = user.getId();
        this.nickname = user.getNickname();
    }

    public SecurityUser(Long id, String nickname) {
        this.id = id;
        this.nickname = nickname;
    }

    public SecurityUser(Authentication authentication) {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("AUTHORITY"));
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return nickname;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
