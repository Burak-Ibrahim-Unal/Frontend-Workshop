import { MovieService } from './../services/movie.service';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './../services/alertify.service';
import { MovieRepository } from '../models/movieRepository';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService,]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  myMovieListTitle: string = "My Movie List";
  noneMovieTitle: string = "Movies not found";
  filterText: string = "";


  constructor(
    private alertifyService: AlertifyService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      this.filteredMovies = this.movies;
    });

    this.movieService.getMovies().subscribe(data => {
      console.log(data);
    });
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
