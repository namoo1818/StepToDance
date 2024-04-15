package com.dance101.steptodance.feedback.domain;

import com.dance101.steptodance.global.domain.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "TIMESTAMP_TBL")
@Entity
public class Timestamp extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timestamp_id")
    private Long id;

    @Column(name = "start_at")
    private LocalTime startAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feedback_id")
    private Feedback feedback;

    @Builder
    public Timestamp(LocalTime startAt, Feedback feedback) {
        this.startAt = startAt;
        this.feedback = feedback;
    }
}
