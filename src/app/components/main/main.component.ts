import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  pageOne:number[]=[2,8];
  pageTwo:number[]=[1];

  moviesOne:Movie[]=[];
  moviesTwo:Movie[]=[]
  ngOnInit(): void {
    this.getPageOneMovie();
    this.getPageTwoMovie();
  }

  getPageOneMovie(){
    for(let i=0;this.pageOne.length>i;i++){
      this.movieService.getById(this.pageOne[i]).subscribe(response=>{
        this.moviesOne[i]= response.data
      })
    }
  }

  getPageTwoMovie(){
    for(let i=0;this.pageTwo.length>i;i++){
      this.movieService.getById(this.pageTwo[i]).subscribe(response=>{
        this.moviesTwo[i]= response.data
      })
    }
  }

}
