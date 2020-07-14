import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlunosCadastroComponent } from './components/alunos/alunos-cadastro/alunos-cadastro.component';
import { AlunosDeleteComponent } from './components/alunos/alunos-delete/alunos-delete.component';
import { AlunosReadComponent } from './components/alunos/alunos-read/alunos-read.component';
import { AlunosUpdateComponent } from './components/alunos/alunos-update/alunos-update.component';
import { CursosCadastroComponent } from './components/cursos/cursos-cadastro/cursos-cadastro.component';
import { CursosDeleteComponent } from './components/cursos/cursos-delete/cursos-delete.component';
import { CursosReadComponent } from './components/cursos/cursos-read/cursos-read.component';
import { CursosUpdateComponent } from './components/cursos/cursos-update/cursos-update.component';
import { MatriculasCadastroComponent } from './components/matriculas/matriculas-cadastro/matriculas-cadastro.component';
import { MatriculasDeleteComponent } from './components/matriculas/matriculas-delete/matriculas-delete.component';
import { MatriculasReadComponent } from './components/matriculas/matriculas-read/matriculas-read.component';
import { MatriculasUpdateComponent } from './components/matriculas/matriculas-update/matriculas-update.component';
import { NotasCadastroComponent } from './components/notas/notas-cadastro/notas-cadastro.component';
import { NotasDeleteComponent } from './components/notas/notas-delete/notas-delete.component';
import { NotasReadComponent } from './components/notas/notas-read/notas-read.component';
import { NotasUpdateComponent } from './components/notas/notas-update/notas-update.component';
import { HomeComponent } from "./views/home/home.component";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from  '@angular/common/http';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {CursosCrudComponent} from './views/cursos-crud/cursos-crud.component'
import { AlunosCrudComponent } from './views/alunos-crud/alunos-crud.component';
import { MatriculasCrudComponent } from './views/matriculas-crud/matriculas-crud.component';
import { ProfessorCrudComponent } from './views/professor-crud/professor-crud.component';
import { NotasCrudComponent } from './views/notas-crud/notas-crud.component';
import { ProfessorReadComponent } from './components/professor/professor-read/professor-read.component';
import { ProfessorCadastroComponent } from './components/professor/professor-cadastro/professor-cadastro.component';
import { ProfessorUpdateComponent } from './components/professor/professor-update/professor-update.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunosCadastroComponent,
    AlunosDeleteComponent,
    AlunosReadComponent,
    AlunosUpdateComponent,
    CursosCadastroComponent,
    CursosDeleteComponent,
    CursosReadComponent,
    CursosUpdateComponent,
    MatriculasCadastroComponent,
    MatriculasDeleteComponent,
    MatriculasReadComponent,
    MatriculasUpdateComponent,
    NotasCadastroComponent,
    NotasDeleteComponent,
    NotasReadComponent,
    NotasUpdateComponent,
    ProfessorReadComponent,
    ProfessorCadastroComponent,
    ProfessorUpdateComponent,
    ProfessorDeleteComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CursosCrudComponent,
    AlunosCrudComponent,
    MatriculasCrudComponent,
    ProfessorCrudComponent,
    NotasCrudComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
