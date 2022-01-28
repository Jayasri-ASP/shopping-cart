import { Component, OnInit, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { ServiceFileService } from '../service-file.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''
  userLogin = ''
  user = '';
  
  constructor(private router: Router, private authService: AuthService, private httpService: ServiceFileService) { }
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
  
  /* this.httpService.getUsers().subscribe(res => {
    this.userLogin = JSON.stringify(res)
    Object.values(res).map((obj)=>{
      this.user = obj
    })
    console.log("user", this.user)
  })*/
 }
 ngOnChanges(changes: SimpleChanges): void {
     console.log("OnChanges", changes);  
 }
  login() {
    const email = this.loginForm.get('name')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.loginUser(email, password)
   // localStorage.setItem('token', "true");
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
