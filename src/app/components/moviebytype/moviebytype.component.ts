import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreOfMovie } from 'src/app/models/genreofmovie';
import { Movie } from 'src/app/models/movie';
import { MovieType } from 'src/app/models/movieType';
import { GenreOfMovieService } from 'src/app/services/genreofmovie.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieTypeService } from 'src/app/services/movietype.service';

@Component({
  selector: 'app-moviebytype',
  templateUrl: './moviebytype.component.html',
  styleUrls: ['./moviebytype.component.css']
})
export class MoviebytypeComponent implements OnInit {

  constructor(private router:Router,private movieTypeService:MovieTypeService,private genreOfMovieService:GenreOfMovieService,private movieService:MovieService,private activetedRoute:ActivatedRoute) { }
  movies:Movie[]=[];
  style:string="";
  filterText:string="";
  filterType:string="";
  movieTypes:MovieType[]=[];
  srry:String="Bu kategoride film bulunamadı."
  check:boolean=true;
  ngOnInit(): void {
    this.getTypeId();
    this.getMovieType();
  }

  doStyle(value:number){
    this.movieTypeService.getById(value).subscribe(response=>{
      this.style = response.data.movieTypeName;
    })
  }

  getMoviesId(value:number){
    this.genreOfMovieService.getByTypeId(value).subscribe(response=>{
      this.GetMovies(response.data);
    });
  }

  GetMovies(value:GenreOfMovie[]){
    for(let i =0 ; value.length ;i++){
      this.movieService.getById(value[i].movieId).subscribe(response=>{
        this.movies[i]=response.data
      })
    }
    if(value.length == 0){
      this.check =false;
    }else{
      this.check =true;
    }
    
  }
  getTypeId(){
    this.activetedRoute.params.subscribe(params=>{
      this.getMoviesId(params["movieTypeId"]);
      this.doStyle(params["movieTypeId"]);
    })
  }
  

  getMovieType(){
    this.movieTypeService.getAll().subscribe(response=>{
      this.movieTypes = response.data;
    })
  }

  // navigate(value:Number){
  //   console.log(value);
  // }

}
