import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title: string = ''
  @Input() username = '';
  constructor(private router: Router, private authService: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
   
}

  OnCancel() {
    this.router.navigateByUrl("/");
  }
  logout() {
    this.authService.logoutUser()
  }
}
