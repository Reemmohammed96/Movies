import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  TrendingTv:any[]=[];
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  peopleImg:string="";
  constructor(private _MoviesService:MoviesService) { 
 }


  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.TrendingTv=response.results;
      console.log(this.TrendingTv);
      })
    
  }

}
