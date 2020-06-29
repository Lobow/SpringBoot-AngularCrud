import { Component, OnInit } from '@angular/core';
import { ProfessorService } from './../professor.service';
import { Router } from '@angular/router';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css']
})
export class ProfessorCadastroComponent implements OnInit {

  professor: Professor = {
    nome: '',
    endereco: '',
    cep: '',
    cpf:'',
    email:'',
    materia: ''
  }

  constructor(private professorService: ProfessorService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastraProfessor(): void {
    this.professorService.create(this.professor).subscribe(() => {
      this.professorService.showMessage('professor cadastrado!')
      this.router.navigate(['/professor'])
    })

  }

  cancel(): void {
    this.router.navigate(['/professor'])
  }

}