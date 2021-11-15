import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], filterText: string): Movie[] {
    return filterText ? movies.filter(m => m.title.toLowerCase().includes(filterText.toLowerCase())
      || m.desc.toLowerCase().includes(filterText))
      : movies; // indexof alternative way
  }

}
