import { Movie } from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      { id: 1, title: "Movie title 1", desc: "Movie 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta quidem velit beatae voluptate magni numquam cum quo nostrum animi.", imgUrl: "1.jpg", isPopular: true, releaseDate: new Date(2002, 5, 19) },
      { id: 2, title: "Movie title 2", desc: "Movie 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta", imgUrl: "2.jpg", isPopular: true, releaseDate: new Date(2001, 6, 1) },
      { id: 3, title: "Movie title 3", desc: "Movie 3 dLorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dicta quidem velit beatae ", imgUrl: "3.jpg", isPopular: false, releaseDate: new Date(2004, 7, 25) },
      { id: 4, title: "Movie title 4", desc: "Movie 4 Lorem ipsum dolor, sit amet", imgUrl: "4.jpg", isPopular: true, releaseDate: new Date(2006, 8, 13) },
      { id: 5, title: "Movie title 5", desc: "Movie 5 Lorem ipsum dolor, sit amet consectetur ", imgUrl: "5.jpg", isPopular: false, releaseDate: new Date(2008, 9, 22) }
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
