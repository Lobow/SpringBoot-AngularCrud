package com.scrudent.facrudade.controller;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scrudent.facrudade.model.Aluno;
import com.scrudent.facrudade.model.Aluno;
import com.scrudent.facrudade.repository.AlunoRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/alunos")
public class AlunoRest {
	
	public AlunoRest() {
		System.out.println("chamou controller Aluno");
	}
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@GetMapping
	public ResponseEntity<Iterable<Aluno>> get(){
		return ResponseEntity.ok(alunoRepository.findAll());
		}
	
	@GetMapping("/{idaluno}")
	public ResponseEntity<Aluno> getById(@PathVariable("idaluno") long idAluno) {
		return alunoRepository.findById(idAluno)
		           .map(record -> ResponseEntity.ok().body(record))
		           .orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping("/{idaluno}")
		public ResponseEntity<Aluno> update(@PathVariable("idaluno") long idAluno,
		                                      @RequestBody Aluno aluno) {
		
		   return alunoRepository.findById(idAluno)
		           .map(record -> {
		               record.setNome(aluno.getNome());	   
		               record.setEndereco(aluno.getEndereco());
		               record.setCep(aluno.getCep());
		               record.setCpf(aluno.getCpf());
		               record.setEmail(aluno.getEmail());
		               Aluno updated = alunoRepository.save(record);
		               return ResponseEntity.ok().body(updated);
		           }).orElse(ResponseEntity.notFound().build());
		}
			
	
	@PostMapping
	public void post(@RequestBody Aluno aluno) {
		alunoRepository.save(aluno);
	}
	
	@DeleteMapping("/{idaluno}")
	public void delete(@PathVariable("idaluno") long idaluno) {
		alunoRepository.deleteById(idaluno);
	}
}