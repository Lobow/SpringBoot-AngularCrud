import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CursosCadastroComponent } from './components/cursos/cursos-cadastro/cursos-cadastro.component';
import { CursosDeleteComponent } from './components/cursos/cursos-delete/cursos-delete.component';
import { CursosUpdateComponent } from './components/cursos/cursos-update/cursos-update.component';
import { CursosCrudComponent } from "./views/cursos-crud/cursos-crud.component";
import { ProfessorCrudComponent } from "./views/professor-crud/professor-crud.component";
import { ProfessorCadastroComponent } from './components/professor/professor-cadastro/professor-cadastro.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';
import { ProfessorUpdateComponent } from './components/professor/professor-update/professor-update.component';
import { AlunosCadastroComponent } from './components/alunos/alunos-cadastro/alunos-cadastro.component';
import { AlunosDeleteComponent } from './components/alunos/alunos-delete/alunos-delete.component';
import { AlunosUpdateComponent } from './components/alunos/alunos-update/alunos-update.component';
import { AlunosCrudComponent } from "./views/alunos-crud/alunos-crud.component";
import { MatriculasCadastroComponent } from './components/matriculas/matriculas-cadastro/matriculas-cadastro.component';
import { MatriculasDeleteComponent } from './components/matriculas/matriculas-delete/matriculas-delete.component';
import { MatriculasUpdateComponent } from './components/matriculas/matriculas-update/matriculas-update.component';
import { MatriculasCrudComponent } from "./views/matriculas-crud/matriculas-crud.component";
import { NotasCadastroComponent } from './components/notas/notas-cadastro/notas-cadastro.component';
import { NotasDeleteComponent } from './components/notas/notas-delete/notas-delete.component';
import { NotasUpdateComponent } from './components/notas/notas-update/notas-update.component';
import { NotasCrudComponent } from "./views/notas-crud/notas-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cursos",
    component: CursosCrudComponent
  },
  {
    path: "cursos/cadastro",
    component: CursosCadastroComponent
  },
  {
    path: "cursos/delete/:idCurso",
    component: CursosDeleteComponent
  },
  {
    path: "cursos/update/:idCurso",
    component: CursosUpdateComponent
  },
  {
    path: "professor",
    component: ProfessorCrudComponent
  },
  {
    path: "professor/cadastro",
    component: ProfessorCadastroComponent
  },
  {
    path: "professor/delete/:idProfessor",
    component: ProfessorDeleteComponent
  },
  {
    path: "professor/update/:idProfessor",
    component: ProfessorUpdateComponent
  },
  {
    path: "alunos",
    component: AlunosCrudComponent
  },
  {
    path: "alunos/cadastro",
    component: AlunosCadastroComponent
  },
  {
    path: "alunos/delete/:idAluno",
    component: AlunosDeleteComponent
  },
  {
    path: "alunos/update/:idAluno",
    component: AlunosUpdateComponent
  },
  {
    path: "matriculas",
    component: MatriculasCrudComponent
  },
  {
    path: "matriculas/cadastro",
    component: MatriculasCadastroComponent
  },
  {
    path: "matriculas/delete/:idMatricula",
    component: MatriculasDeleteComponent
  },
  {
    path: "matriculas/update/:idMatricula",
    component: MatriculasUpdateComponent
  },
  {
    path: "notas",
    component: NotasCrudComponent
  },
  {
    path: "notas/cadastro",
    component: NotasCadastroComponent
  },
  {
    path: "notas/delete/:idNotas",
    component: NotasDeleteComponent
  },
  {
    path: "notas/update/:idNotas",
    component: NotasUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
