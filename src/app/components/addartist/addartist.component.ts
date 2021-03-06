import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArtistService } from 'src/app/services/artist.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-addartist',
  templateUrl: './addartist.component.html',
  styleUrls: ['./addartist.component.css']
})
export class AddartistComponent implements OnInit {
  addArtistForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private artistService:ArtistService) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addArtistForm=this.formBuilder.group({
      fullName:["",Validators.required],
      photo:["",Validators.required],
      history:["",Validators.required]
    })
    
  }

  add(){
    if(this.addArtistForm.controls["photo"].value == ""){
      this.addArtistForm.controls["photo"].setValue("https://user-images.githubusercontent.com/47815793/132744117-68c16f98-09e6-4fa6-b4fc-5e789e222a15.png")
    }
    let artistModel=Object.assign({},this.addArtistForm.value);
    this.artistService.add(artistModel).subscribe(response=>{
      this.toastrService.info("Aktör oluşturuldu.")
    },responseError=>{
      this.toastrService.error("Hata!")
    })
  }
  
}
