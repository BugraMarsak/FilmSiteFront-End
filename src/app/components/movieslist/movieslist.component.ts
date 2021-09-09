import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  movies:Movie[]=[]
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAll().subscribe(response=>{
      this.movies=response.data
      
    })
  }

}
