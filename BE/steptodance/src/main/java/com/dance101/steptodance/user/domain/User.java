package com.dance101.steptodance.user.domain;

import com.dance101.steptodance.global.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "USER_TBL")
@Entity
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "profile_img_url", length = 3000)
    private String profileImgUrl;

    @Column(name = "kakao_id")
    private String kakaoId;

    @Builder
    public User(String nickname, String profileImgUrl, String kakaoId) {
        this.nickname = nickname;
        this.profileImgUrl = profileImgUrl;
        this.kakaoId = kakaoId;
    }
}
