import { Router, ActivatedRoute } from "@angular/router";
import { AlunosService } from "./../alunos.service";
import { Component, OnInit } from "@angular/core";
import { Aluno } from './../alunos.model';

@Component({
  selector: 'app-alunos-update',
  templateUrl: './alunos-update.component.html',
  styleUrls: ['./alunos-update.component.css']
})
export class AlunosUpdateComponent implements OnInit {
  aluno: Aluno;

  constructor(
    private alunoService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("idAluno");
    this.alunoService.readById(id).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  updateAlunos(): void {
    this.alunoService.update(this.aluno).subscribe(() => {
      this.alunoService.showMessage("Cadastro do Aluno atualizado com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}