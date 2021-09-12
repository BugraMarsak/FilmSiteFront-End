import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreOfMovie } from '../models/genreofmovie';

import { ListResponseModel } from '../models/listResponseModel';
import { MovieAndArtist } from '../models/movieandartist';
import { ResponseModel } from '../models/responseModel';




@Injectable({
  providedIn: 'root'
})//
export class GenreOfMovieService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getByTypeId(Id:number):Observable<ListResponseModel<GenreOfMovie>> {
    let newPath=this.apiUrl+"GenreOfMovie/getbytypeid?Id="+Id
    return this.httpClient.get<ListResponseModel<GenreOfMovie>>(newPath);
  }
  getByMovieId(Id:number):Observable<ListResponseModel<GenreOfMovie>> {
    let newPath=this.apiUrl+"GenreOfMovie/getbymovieid?Id="+Id
    return this.httpClient.get<ListResponseModel<GenreOfMovie>>(newPath);
  }
  add(genreOfMovie:GenreOfMovie):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"GenreOfMovie/add",genreOfMovie);
  }

}