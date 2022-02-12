import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NetworksComponent } from './networks/networks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule}from '@angular/common/http';
import { ShortLinePipe } from './short-line.pipe';
import { HomeheadingComponent } from './homeheading/homeheading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviDetailsComponent } from './movi-details/movi-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { FilterbymoviPipe } from './navbar/filterbymovi.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvshowComponent,
    PeopleComponent,
    AboutComponent,
    NetworksComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    ShortLinePipe,
    HomeheadingComponent,
    MoviDetailsComponent,
    TvDetailsComponent,
    FilterbymoviPipe,
    FavouriteComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     CommonModule,
     HttpClientModule,
     BrowserAnimationsModule,
     CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
