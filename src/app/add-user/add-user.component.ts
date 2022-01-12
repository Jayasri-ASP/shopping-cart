import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddUserComponent implements OnInit {
  form = new FormGroup({
    "user": new FormControl('', [Validators.required])
  })
  classes = 'special';
  inputItem: string = '';
  items: string[] = [];
  products = Array();
  showDescription = false;
  description= Array();

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
      "name":this.inputItem,
      "description": this.description
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

  get user() {
    return this.form.get('user')
  }

  addDesc() {
    this.showDescription = true;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
}
