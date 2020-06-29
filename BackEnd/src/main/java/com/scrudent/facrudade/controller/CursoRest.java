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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.scrudent.facrudade.model.Curso;
import com.scrudent.facrudade.repository.CursoRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/cursos")
public class CursoRest {
	
	public CursoRest() {
		System.out.println("chamou controller Curso");
	}
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@GetMapping
	public ResponseEntity<List<Curso>> get(){
		return ResponseEntity.ok(cursoRepository.findAll());
		}
	
	@GetMapping("/{idcurso}")
	public ResponseEntity<Curso> getById(@PathVariable("idcurso") long idCurso) {
		return cursoRepository.findById(idCurso)
		           .map(record -> ResponseEntity.ok().body(record))
		           .orElse(ResponseEntity.notFound().build());
	}
	@PostMapping
	public void post(@RequestBody Curso Curso) {
		cursoRepository.save(Curso);
	}
	
	@PutMapping("/{idcurso}")
	public ResponseEntity<Curso> update(@PathVariable("idcurso") long idCurso,
	                                      @RequestBody Curso curso) {
	   return cursoRepository.findById(idCurso)
	           .map(record -> {
	               record.setNomeCurso(curso.getNomeCurso());	          
	               Curso updated = cursoRepository.save(record);
	               return ResponseEntity.ok().body(updated);
	           }).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{idcurso}")
	public void delete(@PathVariable("idcurso") long idCurso) {
		cursoRepository.deleteById(idCurso);
	}
}