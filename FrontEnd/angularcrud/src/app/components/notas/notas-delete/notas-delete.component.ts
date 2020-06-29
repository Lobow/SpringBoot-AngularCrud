import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Notas } from '../notas.model';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-notas-delete',
  templateUrl: './notas-delete.component.html',
  styleUrls: ['./notas-delete.component.css']
})
export class NotasDeleteComponent implements OnInit {

  notas: Notas;

  constructor(
    private notasService: NotasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('idNotas');
    this.notasService.readById(id).subscribe((notas) => {
      this.notas = notas;
    });
  }

  deleteNotas(): void {
    this.notasService.delete(this.notas.idNotas).subscribe(() => {
      this.notasService.showMessage("Notas excluidas com sucesso!");
      this.router.navigate(["/notas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/notas"]);
  }
}
