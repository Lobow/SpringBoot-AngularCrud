import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-matriculas-crud',
  templateUrl: './matriculas-crud.component.html',
  styleUrls: ['./matriculas-crud.component.css']
})
export class MatriculasCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Matricula',
      icon: 'assignment_ind',
      routeUrl: '/matriculas'
    }
  }

  ngOnInit(): void {
  }

  navigateToMatriculaCadastro(): void {
    this.router.navigate(['/matriculas/cadastro'])
  }

}