package com.dance101.steptodance.guide.domain;

import com.dance101.steptodance.global.domain.BaseEntity;
import com.dance101.steptodance.user.domain.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "GUIDE_TBL")
@Entity
public class Guide extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "guide_id")
    private Long id;

    @Column(name = "video_url")
    private String videoUrl;

    @Column(name = "thumbnail_img_url")
    private String thumbnailImgUrl;

    @Column(name = "song_title")
    private String songTitle;

    @Column(name = "singer")
    private String singer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genre_id")
    private Genre genre;

    @Builder
    public Guide(String videoUrl, String thumbnailImgUrl, String songTitle, String singer, User user, Genre genre) {
        this.videoUrl = videoUrl;
        this.thumbnailImgUrl = thumbnailImgUrl;
        this.songTitle = songTitle;
        this.singer = singer;
        this.user = user;
        this.genre = genre;
    }
}
