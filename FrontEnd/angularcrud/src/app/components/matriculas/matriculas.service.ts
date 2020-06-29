import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Matricula } from "./matricula.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class MatriculasService {
  baseUrl = "http://localhost:8080/matriculas";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  

  create(matricula: Matricula): Observable<Matricula> {
    return this.http.post<Matricula>(this.baseUrl, matricula).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idMatricula: number): Observable<Matricula> {
    const url = `${this.baseUrl}/${idMatricula}`;
    return this.http.get<Matricula>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(matricula: Matricula): Observable<Matricula> {
    const url = `${this.baseUrl}/${matricula.idMatricula}`;
    return this.http.put<Matricula>(url, matricula).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(idMatricula: number): Observable<Matricula> {
    const url = `${this.baseUrl}/${idMatricula}`;
    return this.http.delete<Matricula>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}