import { Component, OnInit } from '@angular/core';
import {movie}  from "../movies/movie";   

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
