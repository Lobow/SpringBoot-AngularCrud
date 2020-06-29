import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-notas-crud',
  templateUrl: './notas-crud.component.html',
  styleUrls: ['./notas-crud.component.css']
})
export class NotasCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Notas',
      icon: 'sticky_note_2',
      routeUrl: '/notas'
    }
  }

  ngOnInit(): void {
  }

  navigateToNotasCadastro(): void {
    this.router.navigate(['/notas/cadastro'])
  }

}