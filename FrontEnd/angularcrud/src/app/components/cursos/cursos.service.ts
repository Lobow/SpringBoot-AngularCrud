
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Curso } from "./curso.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class CursosService {
  baseUrl = "http://localhost:8080/cursos";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  

  create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.baseUrl, curso).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idCurso: number): Observable<Curso> {
    const url = `${this.baseUrl}/${idCurso}`;
    return this.http.get<Curso>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(curso: Curso): Observable<Curso> {
    const url = `${this.baseUrl}/${curso.idCurso}`;
    return this.http.put<Curso>(url, curso).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(idCurso: number): Observable<Curso> {
    const url = `${this.baseUrl}/${idCurso}`;
    return this.http.delete<Curso>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}