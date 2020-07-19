import { Component, OnInit } from '@angular/core';
import { NotasService } from './../notas.service';
import { Router } from '@angular/router';
import { Notas } from '../notas.model';
import { Aluno } from '../../alunos/alunos.model';
import { Professor } from '../../professor/professor.model';
import { AlunosService } from '../../alunos/alunos.service';
import { ProfessorService } from '../../professor/professor.service';

@Component({
  selector: 'app-notas-cadastro',
  templateUrl: './notas-cadastro.component.html',
  styleUrls: ['./notas-cadastro.component.css']
})
export class NotasCadastroComponent implements OnInit {


  notas: Notas={
    nota1:null,
    nota2:null,
    nota3:null,
    media:null
  };
  nota: Notas
  professores: Professor[]=[];
  alunos: Aluno[]=[];
  carregouProfessor: boolean = false;
  carregouAluno: boolean = false;

  ngOnInit(): void {
    this.alunosService
      .read()
      .subscribe( response => {
        this.alunos=response
        this.carregouAluno = true
        console.log(this.alunos)
      } );
      this.professorService
      .read()
      .subscribe( response => {
        this.professores=response
        this.carregouProfessor = true
        console.log(this.professores)
      } );

      this.notas = new Notas();

      
    
  }

  constructor(private cursosService: NotasService,
    private alunosService:AlunosService,
    private professorService:ProfessorService,
      private router: Router) { }

  cadastraNotas(): void {
    this.cursosService.create(this.notas).subscribe(() => {
      this.cursosService.showMessage('Notas registradas!')
      this.router.navigate(['/notas'])
    })

  }

  cancel(): void {
    this.router.navigate(['/notas'])
  }
  
  calcularMedia(nota1, nota2, nota3){ 
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
   this.notas.media = (nota1+nota2+nota3)/3
  
  }

}