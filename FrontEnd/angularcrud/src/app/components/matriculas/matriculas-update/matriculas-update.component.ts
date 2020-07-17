import { Router, ActivatedRoute } from "@angular/router";
import { MatriculasService } from "./../matriculas.service";
import { Component, OnInit } from "@angular/core";
import { Matricula } from './../matricula.model';
import { Curso } from '../../cursos/curso.model';
import { CursosService } from '../../cursos/cursos.service';

@Component({
  selector: 'app-matriculas-update',
  templateUrl: './matriculas-update.component.html',
  styleUrls: ['./matriculas-update.component.css']
})
export class MatriculasUpdateComponent implements OnInit {
  matricula: Matricula;
  curso: Curso
  cursos: Curso[]=[];
  constructor(
    private cursoService: CursosService,
    private matriculasService: MatriculasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("idMatricula");
    this.matriculasService.readById(id).subscribe((matricula) => {
      this.matricula = matricula;
    });
    this.cursoService
      .read()
      .subscribe( response => {
        this.cursos=response
        console.log(this.cursos)
      } );

  }

  updateMatricula(): void {
    this.matriculasService.update(this.matricula).subscribe(() => {
      this.matriculasService.showMessage("Matricula atualizada com sucesso!");
      this.router.navigate(["/matriculas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/matriculas"]);
  }
}