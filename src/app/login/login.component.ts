import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string = "123344"
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  login() {
    this.router.navigateByUrl('/list');
  }
}
