import { Component, OnInit } from '@angular/core';
import { CursosService } from './../cursos.service';
import { Router } from '@angular/router';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-cursos-cadastro',
  templateUrl: './cursos-cadastro.component.html',
  styleUrls: ['./cursos-cadastro.component.css']
})
export class CursosCadastroComponent implements OnInit {

  curso: Curso = {
    nomeCurso: '',
  }

  constructor(private cursosService: CursosService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  cadastraCurso(): void {
    this.cursosService.create(this.curso).subscribe(() => {
      this.cursosService.showMessage('Curso criado!')
      this.router.navigate(['/cursos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/cursos'])
  }

}