import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private movieService:MovieService,private userService:UserService) { }
  result:string;
  userName:string;
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    let a:number;
    this.movieService.getAll().subscribe(response=>{
      this.makeRandom(response.data.length);
      this.setMovieIds(response.data)
    })
    
  }

  getUserName(){
    
    this.userService.getuserById(+localStorage.getItem("userId")).subscribe(response=>{
      response.data
    })
  }

  setUserName(user:User){
   this.userName = user.firstName
  }
  checkTokenId(){

    if(localStorage.getItem("token")){
      return false;
    }
    else{
      return true;
    }
  }

  setMovieIds(data:Movie[]){
    
    let y = this.makeRandom(data.length);
    this.result ="/filmler/"+data[y].movieId;
  }

  makeRandom(total:number):number{
    let a:number =Math.floor(Math.random()*total);
    return a;
  }
}
