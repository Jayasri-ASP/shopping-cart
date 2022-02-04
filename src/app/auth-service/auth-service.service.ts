import { Injectable } from '@angular/core';
import "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import {  Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn: boolean = false;
  userId: string = '';
  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then( res => {
      console.log(res);
    })
    .catch(error => {
      alert(error);
    })
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then( res => {
      this.userId =  res.user.email ? res.user.email: '';
      this.setData('userId',this.userId)
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

  setData(key: string, value: string) {
    localStorage.setItem(key, value)
  }
  getData(key: string) {
    return localStorage.getItem(key)
  }
  removeData(key: string) {
    localStorage.removeItem(key);
  }
}
