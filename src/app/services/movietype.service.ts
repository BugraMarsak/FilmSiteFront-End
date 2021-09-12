import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { MovieType } from '../models/movieType';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class MovieTypeService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getById(Id:number):Observable<SingleResponseModel<MovieType>> {
    let newPath=this.apiUrl+"movietype/getbyid?Id="+Id
    return this.httpClient.get<SingleResponseModel<MovieType>>(newPath);
  }

  getAll():Observable<ListResponseModel<MovieType>> {
    let newPath=this.apiUrl+"movietype/getall"
    return this.httpClient.get<ListResponseModel<MovieType>>(newPath);
  }


}