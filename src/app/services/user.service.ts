import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})//
export class UserService {

  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient: HttpClient) { } 

  getuserById(UserId:number):Observable<ListResponseModel<User>> {
    let newPath=this.apiUrl+"User/getbyid?userId="+UserId
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

}