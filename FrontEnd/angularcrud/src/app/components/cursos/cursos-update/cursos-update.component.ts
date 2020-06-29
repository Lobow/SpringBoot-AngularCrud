
import { Router, ActivatedRoute } from "@angular/router";
import { CursosService } from "./../cursos.service";
import { Component, OnInit } from "@angular/core";
import { Curso } from './../curso.model';

@Component({
  selector: 'app-cursos-update',
  templateUrl: './cursos-update.component.html',
  styleUrls: ['./cursos-update.component.css']
})
export class CursosUpdateComponent implements OnInit {
  curso: Curso;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("idCurso");
    this.cursosService.readById(id).subscribe((curso) => {
      this.curso = curso;
    });
  }

  updateCurso(): void {
    this.cursosService.update(this.curso).subscribe(() => {
      this.cursosService.showMessage("Cursos atualizado com sucesso!");
      this.router.navigate(["/cursos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cursos"]);
  }
}