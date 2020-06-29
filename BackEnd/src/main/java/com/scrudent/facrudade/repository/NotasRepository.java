package com.scrudent.facrudade.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scrudent.facrudade.model.Notas;

@Repository
public interface NotasRepository extends JpaRepository <Notas, Long> {

}