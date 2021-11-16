import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

  apiUrl = "http://localhost:3000/movies";

  constructor(private httpClient: HttpClient) {

  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(handleError: HttpErrorResponse) {
    if (handleError.error instanceof ErrorEvent) {
      console.log("Error: " + handleError.error.message);
    } else {
      switch (handleError.status) {
        case 403:
          console.log("Access denied");
          break;
        case 404:
          console.log("Page is not found");
          break;
        default:
          console.log("unknown error");
      }
    }
    return throwError("unknown error occured...");
  }
}
