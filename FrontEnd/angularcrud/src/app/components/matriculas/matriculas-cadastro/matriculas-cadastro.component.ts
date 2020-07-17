import { Component, OnInit } from '@angular/core';
import { MatriculasService } from './../matriculas.service';
import { Router } from '@angular/router';
import { Matricula } from '../matricula.model';
import { AlunosService } from '../../alunos/alunos.service';
import { CursosService } from '../../cursos/cursos.service';
import { Aluno } from '../../alunos/alunos.model';
import { Curso } from '../../cursos/curso.model';


@Component({
  selector: 'app-matriculas-cadastro',
  templateUrl: './matriculas-cadastro.component.html',
  styleUrls: ['./matriculas-cadastro.component.css']
})
export class MatriculasCadastroComponent implements OnInit {
  



  ngOnInit(): void {
    this.alunoService
      .read()
      .subscribe( response => {
        this.alunos=response
        this.carregouAluno = true
        console.log(this.alunos)
      } );
      this.cursoService
      .read()
      .subscribe( response => {
        this.cursos=response
        this.carregouCurso = true
        console.log(this.cursos)
      } );

     this.matricula =  new Matricula();
      
  }
  carregouCurso: boolean = false;
  carregouAluno: boolean = false;
  matricula: Matricula;
  alunos: Aluno[]=[];
  cursos: Curso[]=[];

  constructor(private matriculasService: MatriculasService,
      private alunoService: AlunosService,
      private cursoService: CursosService,
      private router: Router) { }

  
  
  cadastraMatricula(): void {
    console.log(this.matricula.aluno)
    this.matriculasService.create(this.matricula).subscribe(() => {
      this.matriculasService.showMessage('Matricula criada!')
      this.router.navigate(['/matriculas'])
    })

  }

  cancel(): void {
    this.router.navigate(['/matriculas'])
  }
  

}
