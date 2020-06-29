import { Router, ActivatedRoute } from "@angular/router";
import { ProfessorService } from "./../professor.service";
import { Component, OnInit } from "@angular/core";
import { Professor } from './../professor.model';

@Component({
  selector: 'app-professor-update',
  templateUrl: './professor-update.component.html',
  styleUrls: ['./professor-update.component.css']
})
export class ProfessorUpdateComponent implements OnInit {
  professor: Professor;

  constructor(
    private professorervice: ProfessorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("idProfessor");
    this.professorervice.readById(id).subscribe((professor) => {
      this.professor = professor;
    });
  }

  updateProfessor(): void {
    this.professorervice.update(this.professor).subscribe(() => {
      this.professorervice.showMessage("Cadastro do professor atualizado com sucesso!");
      this.router.navigate(["/professor"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/professor"]);
  }
}