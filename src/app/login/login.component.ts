import { Component, OnInit, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  username: string = 'jayasri'
  constructor(private router: Router, private authService: AuthService) { }
 ngOnInit(): void {
     
 }
 ngOnChanges(changes: SimpleChanges): void {
     console.log("OnChanges", changes);  
 }
  login() {
    localStorage.setItem('token', "true");
    this.router.navigateByUrl('/list');
  }
}
