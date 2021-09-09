import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { MovieAndArtist } from '../models/movieandartist';




@Injectable({
  providedIn: 'root'
})//
export class MovieAndArtistService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getByArtistId(Id:number):Observable<ListResponseModel<MovieAndArtist>> {
    let newPath=this.apiUrl+"movieAndArtist/getbyartistid?Id="+Id
    return this.httpClient.get<ListResponseModel<MovieAndArtist>>(newPath);
  }
  getByMovieId(Id:number):Observable<ListResponseModel<MovieAndArtist>> {
    let newPath=this.apiUrl+"movieAndArtist/getbymovieid?Id="+Id
    return this.httpClient.get<ListResponseModel<MovieAndArtist>>(newPath);
  }


}