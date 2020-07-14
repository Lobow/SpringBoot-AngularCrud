package com.scrudent.facrudade.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
@Table(name="aluno")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Aluno {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idaluno", unique = true)
	private long idAluno;
	
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
	
	@JsonCreator
	public Aluno() {}


	public Aluno(long idAluno, String nome, String endereco, String cep, String cpf, String email) {
		super();
		this.idAluno = idAluno;
		this.nome = nome;
		this.endereco = endereco;
		this.cep = cep;
		this.cpf = cpf;
		this.email = email;
	}


	public long getIdAluno() {
		return idAluno;
	}


	public void setIdAluno(long idAluno) {
		this.idAluno = idAluno;
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
	
	

}
