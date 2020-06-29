import { Component, OnInit } from '@angular/core';
import { NotasService } from './../notas.service';
import { Router } from '@angular/router';
import { Notas } from '../notas.model';

@Component({
  selector: 'app-notas-cadastro',
  templateUrl: './notas-cadastro.component.html',
  styleUrls: ['./notas-cadastro.component.css']
})
export class NotasCadastroComponent implements OnInit {

  notas: Notas = {
    idNotas: null,
    fk_AlunoId: null,
    fk_ProfessorId: null,
    nota1:null,
    nota2:null,
    nota3:null,
    media:null
  }
  

  constructor(private cursosService: NotasService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastraNotas(): void {
    this.cursosService.create(this.notas).subscribe(() => {
      this.cursosService.showMessage('Notas registradas!')
      this.router.navigate(['/notas'])
    })

  }

  cancel(): void {
    this.router.navigate(['/notas'])
  }

}