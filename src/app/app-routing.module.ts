import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistdetailsComponent } from './components/artistdetails/artistdetails.component';
import { ArtistlistComponent } from './components/artistlist/artistlist.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovieslistComponent } from './components/movieslist/movieslist.component';

const routes: Routes = [
  {path:"",component:MovieslistComponent},
  {path:"filmler",component:MovieslistComponent},
  {path:"aktörler",component:ArtistlistComponent},
  {path:"aktörler/:artistId",component:ArtistdetailsComponent},
  {path:"filmler/:movieId",component:MoviedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
