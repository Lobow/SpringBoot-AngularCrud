package com.scrudent.facrudade.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scrudent.facrudade.model.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository <Aluno, Long> {

}