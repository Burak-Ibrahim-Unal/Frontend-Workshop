import { MovieRepository } from '../models/movieRepository';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  filteredMovies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  myMovieListTitle: string = "My Movie List";
  noneMovieTitle: string = "Movies not found";
  filterText: string = "";


  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
    this.filteredMovies = this.movies;
  }

  ngOnInit(): void {
  }

  onInputChange() {
    this.filteredMovies = this.filterText ? this.movies.filter(m => m.title.includes(this.filterText) || m.desc.includes(this.filterText)) : this.movies;
  }

}
