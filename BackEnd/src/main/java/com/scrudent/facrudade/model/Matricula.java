package com.scrudent.facrudade.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="matricula")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Matricula {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idmatricula", unique = true)
	private long idMatricula;
	
	@ManyToOne
	@JoinColumn(name = "idaluno",referencedColumnName="idaluno")
	private Aluno aluno;
		
	@ManyToOne
	@JoinColumn(name = "idcurso",referencedColumnName="idcurso")
	private Curso curso;
		
		
	
	public Matricula() {
		// TODO Auto-generated constructor stub
	}

	public Matricula(long idMatricula, Aluno aluno, Curso curso) {
		super();
		this.idMatricula = idMatricula;
		this.aluno = aluno;
		this.curso = curso;

	}

	public long getIdMatricula() {
		return idMatricula;
	}

	public void setIdMatricula(long idMatricula) {
		this.idMatricula = idMatricula;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	
	
	

}
