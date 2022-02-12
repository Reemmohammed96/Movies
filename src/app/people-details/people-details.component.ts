import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  id:string="";
 Persondetails:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { }

  scribe:any={};
  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'];
   this.scribe= this._MoviesService.getTrendingDetails(this.id,'person').subscribe((response)=>{
      this.Persondetails=response;
      console.log(this.Persondetails);
    });
    
  }
  ngOnDestroy():void{
this.scribe.unsubscribe();
  }

}
