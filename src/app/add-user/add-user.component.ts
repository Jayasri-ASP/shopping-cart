import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
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
    this.http.post("http://localhost:3000/items", {
      "name":this.inputItem
  }).subscribe(data => {
      console.log("Post request:", data);
    },
    error => {
      console.log("Error", error);
    });
    this.products.push(this.inputItem)
    this.inputItem = ''
  }
  editItem(i: number) {
      this.editList = true;
  }
  removeItem(id:number) {
    if(confirm('Are you sure ? ')) {
      this.http.delete("http://localhost:3000/items/"+ id).subscribe(res=> {
        console.log("DELETE", res)
      })
    }
  }
  done() {
    this.editList = false;

  }
  OnCancel() {
    this.router.navigateByUrl("/list");
  }

}
