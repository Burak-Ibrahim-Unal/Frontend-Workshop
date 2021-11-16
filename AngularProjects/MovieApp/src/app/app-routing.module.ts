import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "movies/category/:categoryId", component: MoviesComponent },
  { path: "movies/:movieId", component: MovieDetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
