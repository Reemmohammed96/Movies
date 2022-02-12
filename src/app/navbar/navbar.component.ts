import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
  moviTitle:string="";
  
  TrendingMovies:any[]=[];
  TrendingTv:any[]=[];
  constructor(private _AuthService:AuthService,private _MoviesService:MoviesService) { 
    _AuthService.currentUser.subscribe(()=>{
      if(this._AuthService.currentUser.getValue()!=null){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }
    })
    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.TrendingMovies=response.results;
      console.log(this.TrendingMovies);
     
      });
      this._MoviesService.getTrending('tv').subscribe((response)=>{
        this.TrendingTv=response.results;
        console.log(this.TrendingTv);
        })
 
}
search(){ // if(productValues[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true){
  this.TrendingMovies= this.TrendingMovies.filter(res=>{
 
      return res.title.toLowerCase().match(this.moviTitle.toLowerCase());
      
   })
   localStorage.setItem('MoviesSearch', JSON.stringify(this.TrendingMovies));
     
   console.log(this.TrendingMovies);
 }
IsLogout(){
  this._AuthService.Logout()  ;
}


  ngOnInit(): void {
   
     
     
      
  }
 

}
