import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTestComponent } from './dashboard-test/dashboard-test.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';
import { PostsComponent } from './posts/posts.component';
import { TableTestComponent } from './table-test/table-test.component';
import { TestComponent } from './test/test.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
{path: 'user-form', component: UserFormComponent},
{path: 'posts', component: PostsComponent},
{path: 'dashboard', component: DashboardTestComponent},
{path: 'draganddrop', component: DraganddropComponent},
{path: 'navigation', component: NavigationTestComponent},
{path: 'table', component: TableTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
