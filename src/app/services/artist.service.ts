import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})//
export class ArtistService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getById(Id:number):Observable<SingleResponseModel<Artist>> {
    let newPath=this.apiUrl+"artist/getbyid?Id="+Id
    return this.httpClient.get<SingleResponseModel<Artist>>(newPath);
  }

  getAll():Observable<ListResponseModel<Artist>> {
    let newPath=this.apiUrl+"artist/getall"
    return this.httpClient.get<ListResponseModel<Artist>>(newPath);
  }

  
  add(artist:Artist):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"artist/add",artist);
  }

}