import { Component, OnInit } from '@angular/core';
import {ProfessorService } from '../professor.service';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-professor-read',
  templateUrl: './professor-read.component.html',
  styleUrls: ['./professor-read.component.css']
})

export class ProfessorReadComponent implements OnInit {

 professor: Professor[]
  displayedColumns = ['idProfessor', 'nome','endereco','cep','email','materia', 'action']
  
  constructor(private professorService:ProfessorService) { }

  ngOnInit(): void {
    this.professorService.read().subscribe(professor => {
      this.professor =professor
    })
  }

}