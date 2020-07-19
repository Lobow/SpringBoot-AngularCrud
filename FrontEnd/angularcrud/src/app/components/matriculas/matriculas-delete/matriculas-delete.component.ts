import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Matricula } from '../matricula.model';
import { MatriculasService } from '../matriculas.service';
import { CursosService } from '../../cursos/cursos.service';
import { AlunosService } from '../../alunos/alunos.service';
import { Curso } from '../../cursos/curso.model';
import { Aluno } from '../../alunos/alunos.model';

@Component({
  selector: 'app-matriculas-delete',
  templateUrl: './matriculas-delete.component.html',
  styleUrls: ['./matriculas-delete.component.css']
})
export class MatriculasDeleteComponent implements OnInit {
  matricula: Matricula;
  curso: Curso;
  cursos: Curso[]=[];
  aluno: Aluno;
  alunos: Aluno[]=[];
  constructor(
    private cursoService: CursosService,
    private alunoService: AlunosService,
    private matriculasService: MatriculasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('idMatricula');
    this.matriculasService.readById(id).subscribe((matricula) => {
      this.matricula = matricula;
    });
    this.alunoService
    .read()
    .subscribe( response => {
      this.alunos=response
      console.log(this.alunos)
    } );
    this.cursoService
    .read()
    .subscribe( response => {
      this.cursos=response
      console.log(this.cursos)
    } );
  }

  deleteMatricula(): void {
    this.matriculasService.delete(this.matricula.idMatricula).subscribe(() => {
      this.matriculasService.showMessage("Matricula excluida com sucesso!");
      this.router.navigate(["/matriculas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/matriculas"]);
  }
}