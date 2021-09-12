import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})//
export class CommentService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getById(Id:number):Observable<ListResponseModel<Comment>> {
    let newPath=this.apiUrl+"Comment/getbymovieid?id="+Id
    return this.httpClient.get<ListResponseModel<Comment>>(newPath);
  }


  add(comment:Comment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"comment/add",comment);
  }


}