import { Movi } from './../movi';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  TrendingMovies:Movi[]=[];
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  peopleImg:string="";
  constructor(private _MoviesService:MoviesService) { 
 }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.TrendingMovies=response.results;
      console.log(this.TrendingMovies);
      })
      
  }

}
