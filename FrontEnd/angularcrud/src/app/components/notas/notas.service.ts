import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Notas } from "./notas.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class NotasService {
  baseUrl = "http://localhost:8080/notas";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  

  create(notas: Notas): Observable<Notas> {
    return this.http.post<Notas>(this.baseUrl, notas).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Notas[]> {
    return this.http.get<Notas[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idNotas: number): Observable<Notas> {
    const url = `${this.baseUrl}/${idNotas}`;
    return this.http.get<Notas>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(notas: Notas): Observable<Notas> {
    const url = `${this.baseUrl}/${notas.idNotas}`;
    return this.http.put<Notas>(url, notas).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(idNotas: number): Observable<Notas> {
    const url = `${this.baseUrl}/${idNotas}`;
    return this.http.delete<Notas>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}