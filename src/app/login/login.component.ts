import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''
  userLogin = ''
  user = '';
  
  constructor(private authService: AuthServiceService) { }
  loginForm = new FormGroup({
    "name": new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
    ]),
    "password": new FormControl('', [
      Validators.required,
      Validators.minLength(8)])
  });
  login() {
    const email = this.loginForm.get('name')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.loginUser(email, password)
    this.authService.onAuth()
  }

  register() {
    const email = this.loginForm.get('name')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.registerUser(email,password)
  }

  get name() { return this.loginForm.get('name'); }
  get password() { return this.loginForm.get('password');}
}
