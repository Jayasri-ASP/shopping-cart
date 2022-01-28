import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  form = new FormGroup({
    "user": new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  inputItem: string = '';
  productLength: number = 0;
  products:any = [];
  isEditable: boolean = false;
  editedVal : any
  constructor(private router: Router, private httpService: ServiceFileService, private authService: AuthService) { }
  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.httpService.getPosts().subscribe(res => {
      this.products = res;
      this.productLength = this.products.length;
      })
  }
  addItem() {
    let data = {
      id: new Date().getTime(),
      name:this.inputItem,
      }
    this.httpService.postRequest(data).subscribe((response) => {
      this.getLists();
      this.productLength = this.products.length;
      this.inputItem = '';
    })
  }
  removeItem(id: any) {
    if(confirm('Are you sure ? ')) {
      this.httpService.deleteRequest(id).subscribe(res=> {
        this.getLists();
        this.productLength = this.products.length;
      })
    }
  }
  edit(productId: any) {
      this.editedVal = productId;
      this.isEditable = true;
  }
  editItem(product: any) {
    let data = {
      id: new Date().getTime(),
      name: product.name,
      }
    this.httpService.putRequest(product.id, data).subscribe(res => {
      this.isEditable = false;
      this.getLists();
    })
  }
  OnCancel() {
    this.router.navigateByUrl("/list");
  }
  get user() {
    return this.form.get('user')
  }
  logout() {
    this.authService.logoutUser()
  }
  
}
