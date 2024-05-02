package com.dance101.steptodance.guide.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dance101.steptodance.guide.domain.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
