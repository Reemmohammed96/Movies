import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private favoriteSource=new BehaviorSubject<any>([]);
Currentfavourie=this.favoriteSource.asObservable();
  constructor( private _HttpClient:HttpClient) { }
  changeFavourite(favourite:any[]){
      this.favoriteSource.next(favourite);
  }
  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=c506efdce9344e1917d7b213e8cb68c4`)
    
  }
  getTrendingDetails(id:string,mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c506efdce9344e1917d7b213e8cb68c4`)
  
  
  }
}
