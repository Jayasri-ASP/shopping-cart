import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthServiceService } from '../auth-service/auth-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private router: Router, private authService: AuthServiceService) { }
  OnCancel() {
    this.router.navigateByUrl("/");
  }
  logout() {
    this.authService.logoutUser()
  }
}
