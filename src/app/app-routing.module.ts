import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'add-item', loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemModule), canActivate: [AuthGuard] },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
