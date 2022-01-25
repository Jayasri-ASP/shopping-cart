import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddUserComponent implements OnInit {
  form = new FormGroup({
    "user": new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  classes = 'special';
  inputItem: string = '';
  items: string[] = [];
  products = Array();
  showDescription = false;
  description= Array();
  productLength: number = 0;

  constructor(private router: Router, private httpService: ServiceFileService, private authService: AuthService) { }
  editList: boolean = false;
  ngOnInit(): void {
    this.httpService.getPosts().subscribe(res => {
      this.products = Object.values(res).map((obj)=>{
        return obj.name
      })
      console.log("products:" , this.products)
      this.productLength = this.products.length;
      })
  }
  addItem() {
    this.httpService.postRequest({
      "name":this.inputItem,
  }).subscribe(data => {
      console.log("Post request:", data);
    },
    error => {
      console.log("Error", error);
    });
    this.products.push(this.inputItem)
    this.inputItem = ''
    console.log("products" , this.products)
  }
  removeItem(id:number) {
    if(confirm('Are you sure ? ')) {
      this.httpService.deleteRequest(id).subscribe(res=> {
        console.log("DELETE", res)
      })
    }
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
    this.authService.logoutUser()
  }
  
}
