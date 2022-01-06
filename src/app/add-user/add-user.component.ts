import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  classes = 'special';
  inputItem: string = '';
  items: string[] = [];
  products = Array();

  constructor(private router: Router, private http: HttpClient) { }
  editList: boolean = false;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/items").subscribe(res => {
      console.log("res:", res)
      this.products = Object.values(res).map((obj)=>{
        return obj.name
      })
      console.log("products:" , this.products)
      })
  }
  addItem() {
    this.items.push(this.inputItem)
    console.log(this.items)
    this.inputItem = ''
  }
  editItem(i: number) {
      this.editList = true;
  }
  removeItem(id:number) {
    this.items = this.items.filter((value, i) => i != id);
  }
  done() {
    this.editList = false;

  }
  OnCancel() {
    this.router.navigateByUrl("/list");
  }

}
