import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DefaultItemComponent } from './default-item/default-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddUserComponent,
    ContactDetailsComponent,
    DefaultItemComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
