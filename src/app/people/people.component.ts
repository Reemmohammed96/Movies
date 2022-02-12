import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
TrendingPeople:any[]=[];
imgSrc:string="https://image.tmdb.org/t/p/w500";
  peopleImg:string="";
  constructor(private _MoviesService:MoviesService) {  }

  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.TrendingPeople=response.results;
    
  })

}
}
