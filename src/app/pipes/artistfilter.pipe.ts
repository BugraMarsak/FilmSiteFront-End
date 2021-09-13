import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../models/artist';

@Pipe({
  name: 'artistfilter'
})
export class ArtistfilterPipe implements PipeTransform {

  transform(value:Artist[], filterText:string): Artist[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Artist)=>p.fullName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
