import { AlertifyService } from './../services/alertify.service';
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


  constructor(private alertifyService: AlertifyService) {
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

  addToList($event: any, movie: Movie) {
    // console.log(movie.title);
    // console.log($event.target.classList);
    if ($event.target.classList.contains("btn-outline-success")) {
      $event.target.innerText = "Remove From List";
      $event.target.classList.remove("btn-outline-success");
      $event.target.classList.add("btn-outline-danger");

      this.alertifyService.success(movie.title + " is added successfuly");
    } else {
      $event.target.innerText = "Add List";
      $event.target.classList.remove("btn-outline-danger");
      $event.target.classList.add("btn-outline-success");

      this.alertifyService.error(movie.title + " is removed successfuly");

    }
  }
}
