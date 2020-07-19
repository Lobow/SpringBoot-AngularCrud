import { MatriculasService } from './../matriculas.service';
import { Matricula } from './../matricula.model';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../alunos/alunos.service';
import { CursosService } from '../../cursos/cursos.service';
import { Aluno } from '../../alunos/alunos.model';
import { Curso } from '../../cursos/curso.model';

@Component({
  selector: 'app-matriculas-read',
  templateUrl: './matriculas-read.component.html',
  styleUrls: ['./matriculas-read.component.css']
})
export class MatriculasReadComponent implements OnInit {
 
  aluno: Aluno[]
  curso: Curso[]
  matricula: Matricula[]
  displayedColumns = ['idMatricula', 'aluno', 'curso', 'action']
  
  constructor(private matriculaService: MatriculasService,
    private alunoService: AlunosService,
    private cursoService: CursosService,
    ) { }

  ngOnInit(): void {
    this.matriculaService.read().subscribe(matricula => {
      this.matricula = matricula
    })
    this.alunoService.read().subscribe(aluno => {
      this.aluno = aluno
    })
    this.cursoService.read().subscribe(curso => {
      this.curso = curso
    })


  }

} 