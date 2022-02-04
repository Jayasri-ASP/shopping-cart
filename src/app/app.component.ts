import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-list';

  constructor() {
    console.log(environment.apiUrl) 
  }
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDYddrgnDrk0JfpE6veJBVkPv6WiL_WsDQ"
    }
    firebase.initializeApp(firebaseConfig);
  }
}
