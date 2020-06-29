import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cursos-crud',
  templateUrl: './cursos-crud.component.html',
  styleUrls: ['./cursos-crud.component.css']
})
export class CursosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Cursos',
      icon: 'folder_shared',
      routeUrl: '/cursos'
    }
  }

  ngOnInit(): void {
  }

  navigateToCursoCadastro(): void {
    this.router.navigate(['/cursos/cadastro'])
  }

}