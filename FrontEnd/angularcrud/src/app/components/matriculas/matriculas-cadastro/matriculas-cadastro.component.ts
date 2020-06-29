import { Component, OnInit } from '@angular/core';
import { MatriculasService } from './../matriculas.service';
import { Router } from '@angular/router';
import { Matricula } from '../matricula.model';

@Component({
  selector: 'app-matriculas-cadastro',
  templateUrl: './matriculas-cadastro.component.html',
  styleUrls: ['./matriculas-cadastro.component.css']
})
export class MatriculasCadastroComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  matricula: Matricula = {
    idMatricula: null,
    fk_idAluno:null ,
    fk_idCurso: null
  }
  constructor(private matriculasService: MatriculasService,
      private router: Router) { }


  cadastraMatricula(): void {
    this.matriculasService.create(this.matricula).subscribe(() => {
      this.matriculasService.showMessage('Matricula criada!')
      this.router.navigate(['/matriculas'])
    })

  }

  cancel(): void {
    this.router.navigate(['/matriculas'])
  }

}
