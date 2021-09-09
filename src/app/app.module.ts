import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { MovieslistComponent } from './components/movieslist/movieslist.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistlistComponent } from './components/artistlist/artistlist.component';
import { ArtistdetailsComponent } from './components/artistdetails/artistdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MovieslistComponent,
    MoviedetailsComponent,
    ArtistlistComponent,
    ArtistdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
