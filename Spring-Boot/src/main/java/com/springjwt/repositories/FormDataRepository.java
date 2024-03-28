package com.springjwt.repositories;

import com.springjwt.entities.FormData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormDataRepository extends JpaRepository<FormData, Long> {
}