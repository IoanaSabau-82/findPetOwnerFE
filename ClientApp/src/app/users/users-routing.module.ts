import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTestComponent } from './test-schematics/dashboard-test/dashboard-test.component';
import { PostsComponent } from './posts/posts.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { PostsForVolunteersComponent } from './posts-for-volunteers/posts-for-volunteers/posts-for-volunteers.component';
import { PostsForVolunteersByAccountComponent } from './posts-for-volunteers/posts-for-volunteers-by-account/posts-for-volunteers-by-account.component';



const routes: Routes = [
{path: 'user-form', component: UserFormComponent},
{path: 'post-form', component: PostFormComponent},
{path: 'assignment-form', component: AssignmentFormComponent},
{path: 'posts', component: PostsComponent},
{path: 'posts-for-volunteers', component: PostsForVolunteersComponent},
{path: 'posts-for-volunteers-by-account', component: PostsForVolunteersByAccountComponent},
{path: 'dashboard', component: DashboardTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
