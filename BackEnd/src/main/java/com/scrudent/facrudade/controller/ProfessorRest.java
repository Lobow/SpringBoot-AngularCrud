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


import com.scrudent.facrudade.model.Professor;
import com.scrudent.facrudade.repository.ProfessorRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/professor")
public class ProfessorRest {
	
	public ProfessorRest() {
		System.out.println("chamou controller Professores");
	}
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@GetMapping
	public ResponseEntity<List<Professor>> get(){
		return ResponseEntity.ok(professorRepository.findAll());
		}
	
	@GetMapping("/{idprofessor}")
	public ResponseEntity<Professor> getById(@PathVariable("idprofessor") long idProfessor) {
		return professorRepository.findById(idProfessor)
		           .map(record -> ResponseEntity.ok().body(record))
		           .orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public void post(@RequestBody Professor professor) {
		professorRepository.save(professor);
	}
	@PutMapping("/{idprofessor}")
	public ResponseEntity<Professor> update(@PathVariable("idprofessor") long idProfessor,
	                                      @RequestBody Professor professor) {
	   return professorRepository.findById(idProfessor)
	           .map(record -> {
	               record.setNome(professor.getNome());	   
	               record.setEndereco(professor.getEndereco());
	               record.setCep(professor.getCep());
	               record.setCpf(professor.getCpf());
	               record.setEmail(professor.getEmail());
	               record.setMateria(professor.getMateria());
	               Professor updated = professorRepository.save(record);
	               return ResponseEntity.ok().body(updated);
	           }).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{idprofessor}")
	public void delete(@PathVariable("idprofessor") long idprofessor) {
		professorRepository.deleteById(idprofessor);
	}
}