import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  form = new FormGroup({
    "user": new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  inputItem: string = '';
  productLength: number = 0;
  products = Object();
  isEditable: boolean = false;
  editedVal : number = 0;
  errorMessage = Object();

  constructor(private router: Router, private httpService: ServiceFileService) { }
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
    }, (error => { 
        this.errorMessage = error;
        console.log(this.errorMessage)
    }));
  }
  removeItem(id: number) {
    if(confirm('Are you sure ? ')) {
      this.httpService.deleteRequest(id).subscribe(res=> {
        this.getLists();
        this.productLength = this.products.length;
      }, (error => { 
          this.errorMessage = error;
          console.log(this.errorMessage)
      }));
    }
  }
  edit(productId: number) {
      this.editedVal = productId;
      this.isEditable = true;
  }
  editItem(product: number, productName: string) {
    let data = {
      id: new Date().getTime(),
      name: productName,
      }
    this.httpService.putRequest(product, data).subscribe(res => {
      this.isEditable = false;
      this.getLists();
    }, (error => { 
        this.errorMessage = error;
        console.log(this.errorMessage)
    }));
  }
  OnCancel() {
    this.router.navigateByUrl("/list");
  }
  get user() {
    return this.form.get('user')
  }
  
}
