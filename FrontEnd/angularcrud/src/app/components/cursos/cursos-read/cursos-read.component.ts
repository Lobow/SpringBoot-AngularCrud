import { CursosService } from './../cursos.service';
import { Curso } from './../curso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-read',
  templateUrl: './cursos-read.component.html',
  styleUrls: ['./cursos-read.component.css']
})
export class CursosReadComponent implements OnInit {

  curso: Curso[]
  displayedColumns = ['idCurso', 'nomeCurso', 'action']
  
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.read().subscribe(curso => {
      this.curso = curso
    })
  }

}