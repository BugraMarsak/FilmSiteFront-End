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
      coverImage:[""],
      directorName:["",Validators.required],
      explanation:["",Validators.required],
      releaseDate:["",Validators.required]
    })
    
  }

  add(){
    if(this.addMovieForm.controls["coverImage"].value == ""){
      this.addMovieForm.controls["coverImage"].setValue("https://user-images.githubusercontent.com/47815793/132744117-68c16f98-09e6-4fa6-b4fc-5e789e222a15.png")
    }
    if(this.addMovieForm.valid){
    let movieModel=Object.assign({},this.addMovieForm.value);
    this.movieService.add(movieModel).subscribe(response=>{
      this.toastrService.info("Film oluşturuldu.")
    },responseError=>{
      this.toastrService.error("Hata!")
    })
    }
    window.location.reload();
  }
}
