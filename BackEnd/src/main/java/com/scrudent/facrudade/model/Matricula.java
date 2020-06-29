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
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="matricula")
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Matricula {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idmatricula", unique = true)
	private long idMatricula;
	
	@OneToOne
	@JoinColumn(name = "idaluno",referencedColumnName="idaluno")
	private Aluno fk_idAluno;
		
	@OneToOne
	@JoinColumn(name = "idcursos",referencedColumnName="idcurso")
	private Curso fk_idCurso;
		
		
	
	public Matricula() {
		// TODO Auto-generated constructor stub
	}

	public Matricula(long idMatricula, Aluno fk_idAluno, Curso fk_idCurso) {
		super();
		this.idMatricula = idMatricula;
		this.fk_idAluno = fk_idAluno;
		this.fk_idCurso = fk_idCurso;

	}

	public long getIdMatricula() {
		return idMatricula;
	}

	public void setIdMatricula(long idMatricula) {
		this.idMatricula = idMatricula;
	}

	public long getFk_idAluno() {
		return fk_idAluno.getIdAluno();
	}

	public void setFk_idAluno(Aluno fk_idAluno) {
		this.fk_idAluno = fk_idAluno;
	}

	public long getFk_idCurso() {
		return fk_idCurso.getIdCurso();
	}

	public void setFk_idCurso(Curso fk_idCurso) {
		this.fk_idCurso = fk_idCurso;
	}

	
	

}
