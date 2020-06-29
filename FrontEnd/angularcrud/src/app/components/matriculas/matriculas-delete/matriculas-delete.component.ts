import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Matricula } from '../matricula.model';
import { MatriculasService } from '../matriculas.service';

@Component({
  selector: 'app-matriculas-delete',
  templateUrl: './matriculas-delete.component.html',
  styleUrls: ['./matriculas-delete.component.css']
})
export class MatriculasDeleteComponent implements OnInit {
  matricula: Matricula;

  constructor(
    private matriculasService: MatriculasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('idMatricula');
    this.matriculasService.readById(id).subscribe((matricula) => {
      this.matricula = matricula;
    });
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