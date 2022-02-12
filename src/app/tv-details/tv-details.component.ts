import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  imgSrc:string="https://image.tmdb.org/t/p/w500";
  id:string="";
 tvdetails:any={};
    constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService)   { }

    scribe:any={};
    ngOnInit(): void {
      this.id=this._ActivatedRoute.snapshot.params['id'];
     this.scribe= this._MoviesService.getTrendingDetails(this.id,'tv').subscribe((response)=>{
        this.tvdetails=response;
        console.log(this.tvdetails);
      });
  }

}
