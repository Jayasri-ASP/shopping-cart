import { WrappedNodeExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-list';
  token: string = "12345"
  ngOnInit(): void {
    localStorage.setItem('token', JSON.stringify(this.token));

  }
}
