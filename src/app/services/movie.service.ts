import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Movie } from '../models/movie';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class MovieService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getById(Id:number):Observable<SingleResponseModel<Movie>> {
    let newPath=this.apiUrl+"movie/getbyid?Id="+Id
    return this.httpClient.get<SingleResponseModel<Movie>>(newPath);
  }

  getAll():Observable<ListResponseModel<Movie>> {
    let newPath=this.apiUrl+"movie/getall"
    return this.httpClient.get<ListResponseModel<Movie>>(newPath);
  }


}