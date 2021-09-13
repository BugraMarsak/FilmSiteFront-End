import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddartistComponent } from './components/addartist/addartist.component';
import { AddmmaComponent } from './components/addmma/addmma.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { ArtistdetailsComponent } from './components/artistdetails/artistdetails.component';
import { ArtistlistComponent } from './components/artistlist/artistlist.component';
import { LoginComponent } from './components/login/login.component';

import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovieslistComponent } from './components/movieslist/movieslist.component';
import { RegisterComponent } from './components/register/register.component';
import { AddgenreComponent } from './components/addgenre/addgenre.component';
import { MainComponent } from './components/main/main.component';
import { MoviebytypeComponent } from './components/moviebytype/moviebytype.component';



const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"filmler",component:MovieslistComponent},
  {path:"aktörler",component:ArtistlistComponent},
  {path:"aktörler/:artistId",component:ArtistdetailsComponent},
  {path:"filmler/:movieId",component:MoviedetailsComponent},
  {path:"film/kategori/:movieTypeId",component:MoviebytypeComponent},
  {path:"film/ekle",component:AddmovieComponent},
  {path:"aktör/ekle",component:AddartistComponent},
  {path:"fva/ekle",component:AddmmaComponent},
  {path:"login",component:LoginComponent},
  {path:"genre/ekle",component:AddgenreComponent},
  {path:"register",component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
