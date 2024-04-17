package com.dance101.steptodance.guide.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dance101.steptodance.guide.domain.Guide;

public interface GuideRepository extends JpaRepository<Guide, Long>, GuideRepositoryCustom {
}
