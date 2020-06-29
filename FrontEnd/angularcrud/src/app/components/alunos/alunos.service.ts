import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Aluno } from "./alunos.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class AlunosService {
  baseUrl = "http://localhost:8080/alunos";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  

  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idAluno: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${idAluno}`;
    return this.http.get<Aluno>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(aluno: Aluno): Observable<Aluno> {
    const url = `${this.baseUrl}/${aluno.idAluno}`;
    return this.http.put<Aluno>(url, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(idAluno: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${idAluno}`;
    return this.http.delete<Aluno>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}