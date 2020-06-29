import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Professor } from "./professor.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class ProfessorService {
  baseUrl = "http://localhost:8080/professor";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  

  create(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.baseUrl, professor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idProfessor: number): Observable<Professor> {
    const url = `${this.baseUrl}/${idProfessor}`;
    return this.http.get<Professor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(Professor: Professor): Observable<Professor> {
    const url = `${this.baseUrl}/${Professor.idProfessor}`;
    return this.http.put<Professor>(url, Professor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(idProfessor: number): Observable<Professor> {
    const url = `${this.baseUrl}/${idProfessor}`;
    return this.http.delete<Professor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}