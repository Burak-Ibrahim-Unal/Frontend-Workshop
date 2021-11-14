import { MovieRepository } from './../../models/movieRepository';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  myMovieListTitle: string = "My Movie List";
  noneMovieTitle: string = "Movies not found";

  constructor() {
    this.movies = new MovieRepository().getMovies();
  }

  ngOnInit(): void {
  }


}
