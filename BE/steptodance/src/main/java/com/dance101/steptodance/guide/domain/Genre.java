package com.dance101.steptodance.guide.domain;

import com.dance101.steptodance.global.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "GENRE_TBL")
@Entity
public class Genre extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "genre_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Builder
    public Genre(String name) {
        this.name = name;
    }
}
