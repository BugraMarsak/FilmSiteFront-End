import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Artist } from 'src/app/models/artist';
import { Comment } from 'src/app/models/comment';
import { GenreOfMovie } from 'src/app/models/genreofmovie';
import { Movie } from 'src/app/models/movie';
import { MovieAndArtist } from 'src/app/models/movieandartist';
import { MovieType } from 'src/app/models/movieType';
import { User } from 'src/app/models/user';
import { ArtistService } from 'src/app/services/artist.service';
import { CommentService } from 'src/app/services/comment.service';
import { GenreOfMovieService } from 'src/app/services/genreofmovie.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieAndArtistService } from 'src/app/services/movieandartist.service';
import { MovieTypeService } from 'src/app/services/movietype.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private activetedRoute:ActivatedRoute,private movieTypeService:MovieTypeService ,private genreOfMovieService:GenreOfMovieService,private commentService:CommentService,private userService:UserService ,private movieAndArtistService:MovieAndArtistService,private artistService:ArtistService,private movieService:MovieService) { }
  movie:Movie;
  artists:Artist[]=[]
  comments:Comment[]=[];
  users:User[]=[];
  totalRate:number;
  userRate:number;
  userRemark:string="";
  movieTypes:MovieType[]=[];
  style:string="";
  userName:string="";
  commentForm:FormGroup;
  ngOnInit(): void {
    this.getMovieId();
    
  }

  createCommitForm(movieId:number){
    let useId:number = +localStorage.getItem("userId")
    this.getName(useId);
    this.commentForm = this.formBuilder.group({
      userId:[useId,Validators.required],
      movieId:[movieId,Validators.required],
      remark:["",Validators.required],
      rate:["",Validators.required],
      userName:["",Validators.required],
      
    })
    
  }

  sendCommit(){
    this.commentForm.controls["userName"].setValue(this.userName)
    this.commentForm.controls["rate"].setValue(this.userRate)
    this.commentForm.controls["remark"].setValue(this.userRemark)
    console.log(this.commentForm.value)
    if(this.commentForm.valid){
      let commentModel=Object.assign({},this.commentForm.value);
      this.commentService.add(commentModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
        window.location.reload();
      })
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }
  }

  setter(value:string){
    this.userName = value
    
  }

  getName(userId:number){
    let result:string="";
    this.userService.getuserById(userId).subscribe(response=>{
      result = response.data[0].firstName+" "+response.data[0].lastName;
      this.setter(result)
    })
    
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
  getGenre(movieId:number){
    this.genreOfMovieService.getByMovieId(movieId).subscribe(response=>{
      this.getMovieTypes(response.data)
      
    })
  }

  getMovieTypes(genreOfMovie:GenreOfMovie[]){
    for(let i =0;genreOfMovie.length>i;i++){
      this.movieTypeService.getById(genreOfMovie[i].movieTypeId).subscribe(response=>{
        this.movieTypes[i] =response.data
      })
    }
  }

  doStyle(){
    this.style=""
    for(let i=0;this.movieTypes.length>i;i++){
      if(i==0){
        this.style =this.movieTypes[i].movieTypeName;
      }else{
        this.style = this.style + "/"+ this.movieTypes[i].movieTypeName
      }
      
    }
    return this.style;
    
  }

  getArtists(MAAS:MovieAndArtist[]){
    for(let i =0; MAAS.length>i;i++){
      this.artistService.getById(MAAS[i].artistId).subscribe(response=>{
        this.artists[i]=response.data;
      })}
  }
  

  getComments(id:number){
    this.commentService.getById(id).subscribe(response=>{
      this.reverseComments(response.data);
      this.getTotalRates(response.data);
    })
  }

  reverseComments(value:Comment[]){
    let j:number =1;
    for(let i=0;value.length>i;i++){
      this.comments[i] =value[value.length-j]
      j +=1;
    }
  }

  getTotalRates(comments:Comment[]){
    this.totalRate = 0;
    let i=0
    for(i;comments.length>i;i++ ){
      this.totalRate += comments[i].rate;
    }
    this.totalRate = this.totalRate/i
  }

  getMovieId(){
    this.activetedRoute.params.subscribe(params=>{
      this.getByMovieId(params["movieId"]);
      this.getMAA(params["movieId"]);
      this.getComments(params["movieId"]);
      this.getGenre(params["movieId"]);
      this.createCommitForm(params["movieId"]);
    })
  }

}