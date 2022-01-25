import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthInterceptorService } from '../auth-interceptor.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isLoggedIn == true)
      {
        return false;
      }
     // if(!localStorage.getItem('token') == true) {
     //   return false;
    //  }
    return true;
  }
  
}
