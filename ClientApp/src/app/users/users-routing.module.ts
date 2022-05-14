import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTestComponent } from './test-schematics/dashboard-test/dashboard-test.component';
import { DraganddropComponent } from './test-schematics/draganddrop/draganddrop.component';
import { NavigationTestComponent } from './test-schematics/navigation-test/navigation-test.component';
import { PostsComponent } from './posts/posts.component';
import { TableTestComponent } from './test-schematics/table-test/table-test.component';
import { TestComponent } from './test-schematics/test/test.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PostFormComponent } from './post-form/post-form.component';


const routes: Routes = [
{path: 'user-form', component: UserFormComponent},
{path: 'post-form', component: PostFormComponent},
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
