import { Injectable } from '@angular/core';
import "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then( res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error);
    })
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then( res => {
      console.log("login response: ",res.user)
    })
    .catch(error => {
      alert("Authentication failed ! Please check the username or password")
    })
  }

  logoutUser() {
    const auth = getAuth();
    auth.signOut();
    this.router.navigateByUrl('');
  }

  onAuth() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/list')
    } else {
      this.isLoggedIn = false;
      this.router.navigateByUrl('/')
    }
  });
  }
}