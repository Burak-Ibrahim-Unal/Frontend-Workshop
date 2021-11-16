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
    return throwError("unknown error occured...");
  }
}
