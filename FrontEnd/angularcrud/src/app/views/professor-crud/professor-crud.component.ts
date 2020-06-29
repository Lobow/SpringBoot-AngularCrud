import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-professor-crud',
  templateUrl: './professor-crud.component.html',
  styleUrls: ['./professor-crud.component.css']
})
export class ProfessorCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Professores',
      icon: 'supervisor_account',
      routeUrl: '/professor'
    }
  }

  ngOnInit(): void {
  }

  navigateToProfessorCadastro(): void {
    this.router.navigate(['/professor/cadastro'])
  }

}