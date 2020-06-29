import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Curso } from '../curso.model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-delete',
  templateUrl: './cursos-delete.component.html',
  styleUrls: ['./cursos-delete.component.css']
})
export class CursosDeleteComponent implements OnInit {
  curso: Curso;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('idCurso');
    this.cursosService.readById(id).subscribe((curso) => {
      this.curso = curso;
    });
  }

  deleteCurso(): void {
    this.cursosService.delete(this.curso.idCurso).subscribe(() => {
      this.cursosService.showMessage("Curso excluido com sucesso!");
      this.router.navigate(["/cursos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cursos"]);
  }
}