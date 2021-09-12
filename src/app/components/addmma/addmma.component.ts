import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artist } from 'src/app/models/artist';
import { Movie } from 'src/app/models/movie';
import { ArtistService } from 'src/app/services/artist.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieAndArtistService } from 'src/app/services/movieandartist.service';

@Component({
  selector: 'app-addmma',
  templateUrl: './addmma.component.html',
  styleUrls: ['./addmma.component.css']
})
export class AddmmaComponent implements OnInit {

  constructor(private artistService:ArtistService,private formBuilder:FormBuilder,private toastrService:ToastrService,private movieService:MovieService,private mmaService:MovieAndArtistService) { }

  movies:Movie[]=[];
  artists:Artist[]=[];
  movieFilter="";
  artistFilter="";
  addMAAForm:FormGroup;
  ngOnInit(): void {
    this.getArtists();
    this.getMovies();
    this.createAddForm();
  }

  getArtists(){
    this.artistService.getAll().subscribe(response=> {
      this.artists =response.data;
    })
  }

  getMovies(){
    this.movieService.getAll().subscribe(response=>{
      this.movies = response.data;
    })
  }

  createAddForm(){
    this.addMAAForm=this.formBuilder.group({
      movieId:["",Validators.required],
      artistId:["",Validators.required],
    })
  }

  add(){
    this.addMAAForm.controls["movieId"].setValue(this.movieFilter)
    this.addMAAForm.controls["artistId"].setValue(this.artistFilter)
    if(this.addMAAForm.valid){
      let mmaModel=Object.assign({},this.addMAAForm.value);
      this.mmaService.add(mmaModel).subscribe(response=>{
        this.toastrService.info("Aktör filme eklendi oluşturuldu.")
      },responseError=>{
        this.toastrService.error("Hata!")
      })
      }
  }
}
