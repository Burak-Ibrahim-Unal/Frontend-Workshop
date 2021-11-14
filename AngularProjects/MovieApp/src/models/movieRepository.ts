import { Movie } from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      { id: 1, title: "Movie title 1", desc: "Movie 1 description", imgUrl: "1.jpg" },
      { id: 2, title: "Movie title 2", desc: "Movie 2 description", imgUrl: "2.jpg" },
      { id: 3, title: "Movie title 3", desc: "Movie 3 description", imgUrl: "3.jpg" },
      { id: 4, title: "Movie title 4", desc: "Movie 4 description", imgUrl: "4.jpg" },
      { id: 5, title: "Movie title 5", desc: "Movie 5 description", imgUrl: "5.jpg" }
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i => i.id == id);
  }
}
