import { compileDeclareComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsByAccountComponent } from './posts-by-account/posts-by-account.component';
import { PostsForVolunteersByAccountComponent } from './posts-for-volunteers-by-account/posts-for-volunteers-by-account.component';
import { PostsForVolunteersComponent } from './posts-for-volunteers/posts-for-volunteers.component';
import { PostsComponent } from './posts/posts.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path: 'posts-for-volunteers', component: PostsForVolunteersComponent},
  {path: 'posts-for-volunteers-by-account', component: PostsForVolunteersByAccountComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'post-form', component: PostFormComponent},
  {path: 'assignment-form', component: AssignmentFormComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts-by-account', component: PostsByAccountComponent},
  {path: 'images', component: ImagesGridComponent},
  //{path: '**', de facut, pathMatch: 'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
