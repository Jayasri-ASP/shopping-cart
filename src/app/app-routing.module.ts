import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DefaultItemComponent } from './default-item/default-item.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-user/:id', component: DefaultItemComponent},
  {path: 'contact-details', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
