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


import com.scrudent.facrudade.model.Notas;
import com.scrudent.facrudade.repository.NotasRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/notas")
public class NotasRest {
	
	public NotasRest() {
		System.out.println("chamou controller Notas");
	}
	
	@Autowired
	private NotasRepository notasRepository;
	
	@GetMapping
	public ResponseEntity<List<Notas>> get(){
		return ResponseEntity.ok(notasRepository.findAll());
		}
	@GetMapping("/{idnotas}")
	public ResponseEntity<Notas> getById(@PathVariable("idnotas") long idNotas) {
		return notasRepository.findById(idNotas)
		           .map(record -> ResponseEntity.ok().body(record))
		           .orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping("/{idnotas}")
	public ResponseEntity<Notas> update(@PathVariable("idnotas") long idNotas,
	                                      @RequestBody Notas notas) {
	   return notasRepository.findById(idNotas)
	           .map(record -> {
	               record.setNota1(notas.getNota1());
	               record.setNota2(notas.getNota2());
	               record.setNota3(notas.getNota3());
	               Notas updated = notasRepository.save(record);
	               return ResponseEntity.ok().body(updated);
	           }).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public void post(@RequestBody Notas notas) {
		notasRepository.save(notas);
	}
	
	
	@DeleteMapping("/{idnotas}")
	public void delete(@PathVariable("idnotas") long idnotas) {
		notasRepository.deleteById(idnotas);
	}
}