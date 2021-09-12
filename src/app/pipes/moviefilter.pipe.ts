import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'moviefilter'
})
export class MoviefilterPipe implements PipeTransform {

  transform(value:Movie[], filterText:string): Movie[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Movie)=>p.movieName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
