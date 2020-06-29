package com.scrudent.facrudade.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="notas")
public class Notas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idnotas", unique = true)
	private long idNotas;
	
	@OneToOne
	@JoinColumn(name = "idaluno" ,referencedColumnName="idaluno")
	private Aluno fk_idAluno;
	
	@OneToOne
	@JoinColumn(name = "idprofessor",referencedColumnName="idprofessor")
	private Professor fk_idProfessor;
	
	@Column(name = "nota1")
	private float nota1;
		
	@Column(name = "nota2")
	private float nota2;
	
	@Column(name = "nota3")
	private float nota3;
	
	@Column(name = "media")
	private float media;
	
	
	public Notas() {
		// TODO Auto-generated constructor stub
	}


	public Notas(long idNota, Aluno fk_idAluno, Professor fk_idProfessor, float nota1, float nota2,
			float nota3, float media) {
		super();
		this.idNotas = idNota;
		this.fk_idAluno = fk_idAluno;
		this.fk_idProfessor = fk_idProfessor;
		this.nota1 = nota1;
		this.nota2 = nota2;
		this.nota3 = nota3;
		this.media = media;
	}


	public long getIdNota() {
		return idNotas;
	}


	public void setIdNota(long idNota) {
		this.idNotas = idNota;
	}


	public Aluno getFk_idAluno() {
		return fk_idAluno;
	}


	public void setFk_idAluno(Aluno fk_idAluno) {
		this.fk_idAluno = fk_idAluno;
	}


	public Professor getFk_idProfessor() {
		return fk_idProfessor;
	}


	public void setFk_idProfessor(Professor fk_idProfessor) {
		this.fk_idProfessor = fk_idProfessor;
	}



	public float getNota1() {
		return nota1;
	}


	public void setNota1(float nota1) {
		this.nota1 = nota1;
	}


	public float getNota2() {
		return nota2;
	}


	public void setNota2(float nota2) {
		this.nota2 = nota2;
	}


	public float getNota3() {
		return nota3;
	}


	public void setNota3(float nota3) {
		this.nota3 = nota3;
	}


	public float getMedia() {
		return media;
	}


	public void setMedia(float media) {
		this.media = media;
	}
	
	

}
