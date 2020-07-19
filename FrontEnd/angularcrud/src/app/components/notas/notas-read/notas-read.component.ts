import { Component, OnInit } from '@angular/core';
import { Notas } from '../notas.model';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-notas-read',
  templateUrl: './notas-read.component.html',
  styleUrls: ['./notas-read.component.css']
})
export class NotasReadComponent implements OnInit {

  notas: Notas[]
  nota:Notas
  displayedColumns = ['idNotas','aluno','professor', 'nota1','nota2','nota3','media', 'action']
  
  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.notasService.read().subscribe(notas => {
      this.notas = notas
    })
  }

  validaMedia(){
    if(this.nota.media>6){
      return true
    }else{
      return false
    }
  }

}