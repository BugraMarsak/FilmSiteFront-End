import { Component, OnInit } from '@angular/core';
import { GenreOfMovie } from 'src/app/models/genreofmovie';
import { Movie } from 'src/app/models/movie';
import { MovieType } from 'src/app/models/movieType';
import { GenreOfMovieService } from 'src/app/services/genreofmovie.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieTypeService } from 'src/app/services/movietype.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  movies:Movie[]=[];
  style:string="";
  filterText:string="";
  filterType:string="";
  movieTypes:MovieType[]=[];
  constructor(private movieService:MovieService,private movieTypeService:MovieTypeService ,private genreOfMovieService:GenreOfMovieService) { }

  ngOnInit(): void {
    
    this.getAllMovies();
    this.getMovieType()
  }

  getAllMovies(){
    this.movieService.getAll().subscribe(response=>{
      this.movies=response.data
      
    })
  }



  getMovieType(){
    this.movieTypeService.getAll().subscribe(response=>{
      this.movieTypes = response.data;
    })
  }


}
