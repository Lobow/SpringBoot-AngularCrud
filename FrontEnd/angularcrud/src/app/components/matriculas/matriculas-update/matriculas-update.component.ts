import { Router, ActivatedRoute } from "@angular/router";
import { MatriculasService } from "./../matriculas.service";
import { Component, OnInit } from "@angular/core";
import { Matricula } from './../matricula.model';

@Component({
  selector: 'app-matriculas-update',
  templateUrl: './matriculas-update.component.html',
  styleUrls: ['./matriculas-update.component.css']
})
export class MatriculasUpdateComponent implements OnInit {
  matricula: Matricula;

  constructor(
    private matriculasService: MatriculasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("idMatricula");
    this.matriculasService.readById(id).subscribe((matricula) => {
      this.matricula = matricula;
    });
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