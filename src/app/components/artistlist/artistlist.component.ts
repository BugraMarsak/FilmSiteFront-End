import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css']
})
export class ArtistlistComponent implements OnInit {

  artists:Artist[]=[];
  artistFilter:string ="";
  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    this.getAllArtist();
  }
  getAllArtist(){
    this.artistService.getAll().subscribe(response=>{
      this.artists =response.data
    })
  }

}
