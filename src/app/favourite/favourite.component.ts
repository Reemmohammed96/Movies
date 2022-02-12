import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movi } from '../movi';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
favMovies:any[]=[];
imgSrc:string="https://image.tmdb.org/t/p/w500";

peopleImg:string="";
  constructor(private _MoviesService:MoviesService ) { 
    // this.http.get(url).toPromise().then(res => this.stringData = res as listData[]);
    //  this.favMovies=this._HomeComponent.FavouriteMovies;
  }

  ngOnInit(): void {
    if(localStorage.getItem('favorites')!=null){
      this.favMovies=JSON.parse(localStorage.getItem('favorites') || '{}');
  }
  else{
    this.favMovies=[];
  }
 
  }
}
