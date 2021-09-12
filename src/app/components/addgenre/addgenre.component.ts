import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/models/movie';
import { MovieType } from 'src/app/models/movieType';
import { GenreOfMovieService } from 'src/app/services/genreofmovie.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieTypeService } from 'src/app/services/movietype.service';

@Component({
  selector: 'app-addgenre',
  templateUrl: './addgenre.component.html',
  styleUrls: ['./addgenre.component.css']
})
export class AddgenreComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private movieService:MovieService,private genreService:GenreOfMovieService,private movieTypeService:MovieTypeService) { }
  addGenreOfMovieForm:FormGroup;
  movieTypes:MovieType[]=[];
  movies:Movie[]=[];
  typeFilter:string="";
  movieFilter="";
  ngOnInit(): void {
    this.getTypes();
    this.getMovies();
    this.createGenreOfMovieForm();
  }

  getTypes(){
    this.movieTypeService.getAll().subscribe(response=>{
      this.movieTypes =response.data;
    })
  }
  
  getMovies(){
    this.movieService.getAll().subscribe(response=>{
      this.movies = response.data;
    })
  }

  createGenreOfMovieForm(){
    this.addGenreOfMovieForm=this.formBuilder.group({
      movieId:["",Validators.required],
      movieTypeId:["",Validators.required],
    })
    
  }

  add(){
    if(this.addGenreOfMovieForm.valid){
      let genreModel=Object.assign({},this.addGenreOfMovieForm.value);
      this.genreService.add(genreModel).subscribe(response=>{
        this.toastrService.info("Başarılı.")
      },responseError=>{
        this.toastrService.error("Hata!")
      })
    }
  }
}
