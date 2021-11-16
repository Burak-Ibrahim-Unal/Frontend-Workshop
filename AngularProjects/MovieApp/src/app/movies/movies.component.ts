import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { AlertifyService } from './../services/alertify.service';
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
  errorMessage: any;


  constructor(
    private alertifyService: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovies(params["categoryId"]).subscribe(data => {
        this.movies = data;
        this.filteredMovies = this.movies;
      }, error => this.errorMessage = error);
      console.log(this.errorMessage);
    })
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
