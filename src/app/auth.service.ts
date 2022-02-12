
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { BehaviorSubject, Observable, observable } from 'rxjs';
observable
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 currentUser=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router){
    if(localStorage.getItem('token')!=null){
      this.getUserToken();
    }
   }

 register(formDate:any):Observable<any>{
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup ',formDate);
 }
 Login(formDate:any):Observable<any>{
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formDate);
 }
 getUserToken(){
  let token:any=localStorage.getItem('token');
  this.currentUser.next(jwtDecode(token));
  console.log(this.currentUser);
}
Logout(){
  this.currentUser.next(null);
  localStorage.removeItem('token');
  this._Router.navigate(['/login']);
}
}

