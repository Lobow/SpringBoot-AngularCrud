import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Aluno } from '../alunos.model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-delete',
  templateUrl: './alunos-delete.component.html',
  styleUrls: ['./alunos-delete.component.css']
})
export class AlunosDeleteComponent implements OnInit {
  aluno: Aluno;

  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('idAluno');
    this.alunosService.readById(id).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  deleteAluno(): void {
    this.alunosService.delete(this.aluno.idAluno).subscribe(() => {
      this.alunosService.showMessage("aluno excluido com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}