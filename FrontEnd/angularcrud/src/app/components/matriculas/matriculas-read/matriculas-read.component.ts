import { MatriculasService } from './../matriculas.service';
import { Matricula } from './../matricula.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriculas-read',
  templateUrl: './matriculas-read.component.html',
  styleUrls: ['./matriculas-read.component.css']
})
export class MatriculasReadComponent implements OnInit {

  matricula: Matricula[]
  displayedColumns = ['idMatricula', 'aluno', 'curso', 'action']
  
  constructor(private matriculaService: MatriculasService) { }

  ngOnInit(): void {
    this.matriculaService.read().subscribe(matricula => {
      this.matricula = matricula
    })
  }

} 