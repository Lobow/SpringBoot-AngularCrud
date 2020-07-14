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

@Entity
@Table(name="notas")
public class Notas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idnotas", unique = true)
	private long idNotas;
	
	@ManyToOne
	@JoinColumn(name = "idaluno" ,referencedColumnName="idaluno")
	private Aluno aluno;
	
	@ManyToOne
	@JoinColumn(name = "idprofessor",referencedColumnName="idprofessor")
	private Professor professor;
	
	@Column(name = "nota1")
	private float nota1;
		
	@Column(name = "nota2")
	private float nota2;
	
	@Column(name = "nota3")
	private float nota3;
	
	@Column(name = "media")
	private float media;
	
	@ManyToOne
	@JoinColumn(name = "materia")
	private Professor materia;
	public Notas() {
		// TODO Auto-generated constructor stub
	}


	public Notas(long idNota, Aluno aluno, Professor professor, float nota1, float nota2,
			float nota3, float media, Professor materia) {
		super();
		this.idNotas = idNota;
		this.aluno = aluno;
		this.professor = professor;
		this.nota1 = nota1;
		this.nota2 = nota2;
		this.nota3 = nota3;
		this.media = media;
		this.materia= materia;
	}


	public long getIdNotas() {
		return idNotas;
	}


	public void setIdNotas(long idNotas) {
		this.idNotas = idNotas;
	}


	public Aluno getAluno() {
		return aluno;
	}


	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}


	public Professor getProfessor() {
		return professor;
	}


	public void setProfessor(Professor professor) {
		this.professor = professor;
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


	public Professor getMateria() {
		return materia;
	}


	public void setMateria(Professor materia) {
		this.materia = materia;
	}


	


	
	

}
