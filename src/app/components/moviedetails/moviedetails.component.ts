import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { Movie } from 'src/app/models/movie';
import { MovieAndArtist } from 'src/app/models/movieandartist';
import { ArtistService } from 'src/app/services/artist.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieAndArtistService } from 'src/app/services/movieandartist.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private activetedRoute:ActivatedRoute,private movieAndArtistService:MovieAndArtistService,private artistService:ArtistService,private movieService:MovieService) { }
  movie:Movie;
  artists:Artist[]=[]
  ngOnInit(): void {
    this.getMovieId();
  }

  getByMovieId(movieId:number){
    this.movieService.getById(movieId).subscribe(response=>{
      this.movie =response.data
    })
  }

  getMAA(movieId:number){
    this.movieAndArtistService.getByMovieId(movieId).subscribe(response=>{
      this.getArtists(response.data);

    })
    
  }
  
  getArtists(MAAS:MovieAndArtist[]){
    console.log(MAAS)
    for(let i =0; MAAS.length>i;i++){
      this.artistService.getById(MAAS[i].artistId).subscribe(response=>{
        this.artists[i]=response.data;
      })}
  }

  getMovieId(){
    this.activetedRoute.params.subscribe(params=>{
      this.getByMovieId(params["movieId"]);
      this.getMAA(params["movieId"]);
    })
  }

}