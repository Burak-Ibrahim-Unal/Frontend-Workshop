import { MovieRepository } from './../../models/movieRepository';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  myMovieListTitle: string = "My Movie List";
  noneMovieTitle: string = "Movies not found";

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }


}
