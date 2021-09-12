import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  result:string;
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    let a:number;
    this.movieService.getAll().subscribe(response=>{
      //console.log(response.data.length)
      this.makeRandom(response.data.length);
      this.setMovieIds(response.data)
    })
    
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
