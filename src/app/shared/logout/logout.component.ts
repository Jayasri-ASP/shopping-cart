import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
logout() {
    localStorage.removeItem("userId");
    this.authService.logoutUser()
  }
}
