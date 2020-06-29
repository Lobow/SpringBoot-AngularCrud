import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { Router } from '@angular/router';
import { Aluno } from '../alunos.model';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {

  aluno: Aluno = {
    nome: '',
    endereco: '',
    cep: '',
    cpf:'',
    email:''
  }

  constructor(private cursosService: AlunosService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastraAlunos(): void {
    this.cursosService.create(this.aluno).subscribe(() => {
      this.cursosService.showMessage('Aluno cadastrado!')
      this.router.navigate(['/alunos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/alunos'])
  }

}