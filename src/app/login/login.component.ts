import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  error:string='';
  LoginForm = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
      Validators.required,
    ])
  });

  constructor(private _AuthService: AuthService,private _Router: Router) {}

  submitLoginForm(LoginForm: FormGroup) {
    this._AuthService.Login(LoginForm.value).subscribe((response) => {
      if (response.message == 'success') {
        localStorage.setItem('token',response.token);
        this._AuthService.getUserToken();
        this._Router.navigate(['/home']);
      }
      else{
       this.error=response.errors.email.message;
       
      }
    });

    console.log(LoginForm.value);
  }

  ngOnInit(): void {
  }

}
