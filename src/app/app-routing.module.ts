import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DefaultItemComponent } from './default-item/default-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]},
  {path: 'add-user/:id', component: DefaultItemComponent},
  {path: 'contact-details', component: ContactDetailsComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
