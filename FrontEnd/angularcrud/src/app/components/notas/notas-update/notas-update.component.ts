import { Router, ActivatedRoute } from "@angular/router";
import { NotasService } from "./../notas.service";
import { Component, OnInit } from "@angular/core";
import { Notas } from './../notas.model';

@Component({
  selector: 'app-notas-update',
  templateUrl: './notas-update.component.html',
  styleUrls: ['./notas-update.component.css']
})
export class NotasUpdateComponent implements OnInit {
  notas: Notas;

  constructor(
    private notaservice: NotasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("idNotas");
    this.notaservice.readById(id).subscribe((notas) => {
      this.notas = notas;
    });
  }

  updateNotas(): void {
    this.notaservice.update(this.notas).subscribe(() => {
      this.notaservice.showMessage("Cadastro do notas atualizado com sucesso!");
      this.router.navigate(["/notas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/notas"]);
  }
}