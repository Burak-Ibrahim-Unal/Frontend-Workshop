import { Movie } from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [

    ];
  }
  lorem20

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(m => m.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i => i.id == id);
  }
}
