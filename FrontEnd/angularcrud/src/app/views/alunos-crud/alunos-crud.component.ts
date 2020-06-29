import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-alunos-crud',
  templateUrl: './alunos-crud.component.html',
  styleUrls: ['./alunos-crud.component.css']
})
export class AlunosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Alunos',
      icon: 'account_box',
      routeUrl: '/alunos'
    }
  }

  ngOnInit(): void {
  }

  navigateToCursoCadastro(): void {
    this.router.navigate(['/alunos/cadastro'])
  }

}