package com.scrudent.facrudade.controller;


import java.util.List;

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

import com.scrudent.facrudade.model.Curso;
import com.scrudent.facrudade.model.Matricula;
import com.scrudent.facrudade.repository.MatriculaRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/matriculas")
public class MatriculaRest {
	
	public MatriculaRest() {
		System.out.println("chamou controller Matricula");
	}
	
	@Autowired
	private MatriculaRepository matriculaRepository;
	
	@GetMapping
	public ResponseEntity<List<Matricula>> get(){
		return ResponseEntity.ok(matriculaRepository.findAll());
		}
	
	@PostMapping
	public void post(@RequestBody Matricula matricula) {
		matriculaRepository.save(matricula);
	}
	
	@GetMapping("/{idmatricula}")
	public ResponseEntity<Matricula> getById(@PathVariable("idmatricula") long idMatricula) {
		return matriculaRepository.findById(idMatricula)
		           .map(record -> ResponseEntity.ok().body(record))
		           .orElse(ResponseEntity.notFound().build());
	}
	
	
	@DeleteMapping("/{idmatricula}")
	public void delete(@PathVariable("idmatricula") long idmatricula) {
		matriculaRepository.deleteById(idmatricula);
	}
}