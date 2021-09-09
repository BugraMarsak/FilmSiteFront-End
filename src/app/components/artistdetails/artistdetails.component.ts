import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { Movie } from 'src/app/models/movie';
import { MovieAndArtist } from 'src/app/models/movieandartist';
import { ArtistService } from 'src/app/services/artist.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieAndArtistService } from 'src/app/services/movieandartist.service';

@Component({
  selector: 'app-artistdetails',
  templateUrl: './artistdetails.component.html',
  styleUrls: ['./artistdetails.component.css']
})
export class ArtistdetailsComponent implements OnInit {

  constructor(private activetedRoute:ActivatedRoute,private movieService:MovieService ,private movieAndArtistService:MovieAndArtistService,private artistService:ArtistService) { }
  artist:Artist;
  movies:Movie[]=[];
  
  ngOnInit(): void {
    this.getArtistId();
  }

  getByArtistId(artistId:number){
    this.artistService.getById(artistId).subscribe(response=>{
      this.artist= response.data
    })
  }

  getMAA(artistId:number){
    this.movieAndArtistService.getByArtistId(artistId).subscribe(response=>{
      this.getMovies(response.data);

    })
    
  }

   getMovies(MAAS:MovieAndArtist[]){
    for(let i =0; MAAS.length>i;i++){
     
      this.movieService.getById(MAAS[i].movieId).subscribe(response=>{
        this.movies[i]=response.data;
      })}
    }
      
  

  getArtistId(){
    this.activetedRoute.params.subscribe(params =>{
      this.getByArtistId(params["artistId"])
      this.getMAA(params["artistId"])
    })
  }

  

}
