package com.springjwt.repositories;

import com.springjwt.entities.movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<movie,Long> {
    List<movie> findByNameContainingIgnoreCase(String name);
}
