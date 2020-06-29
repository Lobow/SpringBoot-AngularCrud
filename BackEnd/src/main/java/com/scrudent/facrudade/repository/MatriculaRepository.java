package com.scrudent.facrudade.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scrudent.facrudade.model.Matricula;

@Repository
public interface MatriculaRepository extends JpaRepository <Matricula, Long> {

}