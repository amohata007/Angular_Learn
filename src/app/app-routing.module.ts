import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path : 'myuser',
    component : UserListComponent,
  },
  {
    path : 'myadmin',
    component : AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }