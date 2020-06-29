import { Component, OnInit } from '@angular/core';
import { Aluno } from '../alunos.model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-read',
  templateUrl: './alunos-read.component.html',
  styleUrls: ['./alunos-read.component.css']
})
export class AlunosReadComponent implements OnInit {

  aluno: Aluno[]
  displayedColumns = ['idAluno', 'nome','endereco','cep','email', 'action']
  
  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunosService.read().subscribe(aluno => {
      this.aluno = aluno
    })
  }

}