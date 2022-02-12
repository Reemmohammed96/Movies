import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error:string='';
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.min(16),
      Validators.max(80),
      Validators.required,
    ]),
  });

  constructor(private _AuthService: AuthService,private _Router: Router) {}
  submitRegisterForm(registerForm: FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((response) => {
      if (response.message == 'success') {
        this._Router.navigate(['/login']);
      }
      else{
       this.error=response.errors.email.message;
       
      }
    });

    console.log(registerForm.value);
  }
  ngOnInit(): void {}
}
