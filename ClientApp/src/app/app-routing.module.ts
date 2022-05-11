import { compileDeclareComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingModule } from './users/users-routing.module';

const routes: Routes = [
  {path: 'users', loadChildren : () => import('./users/users.module').then(m=>m.UsersModule)},
  //{path: '**', de facut, pathMatch: 'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
