import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movi as Movie } from '../movi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // isShowIcon:boolean=true;
  currentFav:Movie[]=[];
  TrendingMovies: Movie[] = [];
  TrendingSearchMovies: Movie[] = [];
  TrendingTv: any[] = [];
  FavoriteMovies: Movie[]= [];
  TrendingPeople: any[] = [];
isClicked: boolean = false;
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) {
    if (localStorage.getItem('favorites') == null) {
      this.FavoriteMovies = [];
    } else {
      this.FavoriteMovies = JSON.parse(localStorage.getItem('favorites')!);
    }
    // if (localStorage.getItem('MoviesSearch')== null) {
    //   this.TrendingSearchMovies=JSON.parse(localStorage.getItem('Movies')!) ;
    // } else {
    //   this.TrendingSearchMovies = JSON.parse(localStorage.getItem('MoviesSearch')!);
    // }
  }

  favorite(Favorite: Movie) {
    
    if (this.FavoriteMovies.find(movi=>( movi.id == Favorite.id )))
    {
      Favorite.isClicked=false;
      console.log('false');
      for(let i=0;i<this.FavoriteMovies.length;i++){
        if(this.FavoriteMovies[i].id==Favorite.id){
          this.FavoriteMovies.splice(i,1);
          localStorage.setItem('favorites', JSON.stringify(this.FavoriteMovies));
      
        }
      }
    } else {
     Favorite.isClicked=true;
      this.FavoriteMovies.push(Favorite);
      localStorage.setItem('favorites', JSON.stringify(this.FavoriteMovies));
       // this.isClick = true;
      console.log(this.FavoriteMovies);
    }
  }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response) => {
      this.TrendingMovies = response.results.slice(0, 10);
      localStorage.setItem('Movies', JSON.stringify(this.TrendingMovies));
      console.log(this.TrendingMovies);
    });
    this._MoviesService.getTrending('tv').subscribe((response) => {
      this.TrendingTv = response.results.slice(0, 10);
      console.log(this.TrendingTv);
    });
    this._MoviesService.getTrending('person').subscribe((response) => {
      this.TrendingPeople = response.results.slice(0, 10);
      console.log(this.TrendingPeople);
    });

  }
}
