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
@Table(name = "professor")
public class Professor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idprofessor", unique = true)
	private long idProfessor;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "endereco")
	private String endereco;
		
	@Column(name = "cep")
	private String cep;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "materia")
	private String materia;
	
	public Professor() {
		// TODO Auto-generated constructor stub
	}

	public Professor(long idProfessor, String nome, String endereco, String cep, String cpf, String email, String materia) {
		super();
		this.idProfessor = idProfessor;
		this.nome = nome;
		this.endereco = endereco;
		this.cep = cep;
		this.cpf = cpf;
		this.email = email;
		this.materia = materia;
	}

	public long getIdProfessor() {
		return idProfessor;
	}

	public void setIdProfessor(long idProfessor) {
		this.idProfessor = idProfessor;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}
	
	
	

}
