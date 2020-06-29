import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Professor } from '../professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-delete',
  templateUrl: './professor-delete.component.html',
  styleUrls: ['./professor-delete.component.css']
})
export class ProfessorDeleteComponent implements OnInit {
  professor: Professor;

  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('idProfessor');
    this.professorService.readById(id).subscribe((professor) => {
      this.professor = professor;
    });
  }

  deleteProfessor(): void {
    this.professorService.delete(this.professor.idProfessor).subscribe(() => {
      this.professorService.showMessage("professor excluido com sucesso!");
      this.router.navigate(["/professor"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/professor"]);
  }
}