package com.scrudent.facrudade.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
@Table(name="curso")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Curso {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idcurso", unique = true)
	private long idCurso;
	
	@Column(name = "nomecurso")
	private String nomeCurso;
	

	public Curso() {
		// TODO Auto-generated constructor stub
	}


	public Curso(long idCurso, String nomeCurso) {
		super();
		this.idCurso = idCurso;
		this.nomeCurso = nomeCurso;
		
	}


	public long getIdCurso() {
		return idCurso;
	}


	public void setIdCurso(long idCurso) {
		this.idCurso = idCurso;
	}


	public String getNomeCurso() {
		return nomeCurso;
	}


	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}


	
	
	

}
