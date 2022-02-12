import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movi-details',
  templateUrl: './movi-details.component.html',
  styleUrls: ['./movi-details.component.scss']
})
export class MoviDetailsComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
   id:string="";
  movidetails:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
 
  

  }
  scribe:any={};
  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'];
   this.scribe= this._MoviesService.getTrendingDetails(this.id,'movie').subscribe((response)=>{
      this.movidetails=response;
      console.log(this.movidetails);
    });
    
  }
  ngOnDestroy():void{
this.scribe.unsubscribe();
  }

}
