import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AddItemComponent,
  ],
  imports: [
    CommonModule,
    AddItemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule  ]
})
export class AddItemModule { }
