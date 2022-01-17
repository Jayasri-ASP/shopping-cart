import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ServiceFileService } from '../service-file.service';

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

  constructor(private router: Router, private http: HttpClient, private httpService: ServiceFileService) { }
  editList: boolean = false;
  ngOnInit(): void {
    this.httpService.getPosts().subscribe(res => {
      this.products = Object.values(res).map((obj)=>{
        return obj.name
      })
      console.log("products:" , this.products)
      })
  }
  addItem() {
    this.httpService.postRequest({
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
 /* editItem(i: number) {
      this.editList = true;
  } */
  removeItem(id:number) {
    if(confirm('Are you sure ? ')) {
      this.httpService.deleteRequest(id).subscribe(res=> {
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
