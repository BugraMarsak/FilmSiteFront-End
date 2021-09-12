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
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddartistComponent } from './components/addartist/addartist.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AddmmaComponent } from './components/addmma/addmma.component';
import { MoviefilterPipe } from './pipes/moviefilter.pipe';
import { AddgenreComponent } from './components/addgenre/addgenre.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MovieslistComponent,
    MoviedetailsComponent,
    ArtistlistComponent,
    ArtistdetailsComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    FooterComponent,
    AddartistComponent,
    AddmovieComponent,
    AddmmaComponent,
    MoviefilterPipe,
    AddgenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
