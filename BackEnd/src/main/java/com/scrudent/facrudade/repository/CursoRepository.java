package com.scrudent.facrudade.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scrudent.facrudade.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository <Curso, Long> {

}