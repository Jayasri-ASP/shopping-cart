import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''
  userLogin = ''
  user = '';
  
  constructor(private authService: AuthService) { }
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
 ngOnInit(): void {
 }
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
