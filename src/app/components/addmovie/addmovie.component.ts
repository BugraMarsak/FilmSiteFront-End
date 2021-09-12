import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  addMovieForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private movieService:MovieService) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addMovieForm=this.formBuilder.group({
      movieName:["",Validators.required],
      coverImage:["",Validators.required],
      directorName:["",Validators.required],
      explanation:["",Validators.required],
      releaseDate:["",Validators.required]
    })
    
  }

  add(){
    if(this.addMovieForm.valid){
    let movieModel=Object.assign({},this.addMovieForm.value);
    this.movieService.add(movieModel).subscribe(response=>{
      this.toastrService.info("Film oluşturuldu.")
    },responseError=>{
      this.toastrService.error("Hata!")
    })
    }
  }
}
