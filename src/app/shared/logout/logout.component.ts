import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service/auth-service.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthServiceService) { }
logout() {
    this.authService.removeData("userId");
    this.authService.logoutUser()
  }
}
