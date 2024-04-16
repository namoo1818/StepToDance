package com.dance101.steptodance.feedback.repository;

import com.dance101.steptodance.feedback.domain.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long>, FeedbackRepositoryCustom {
}
