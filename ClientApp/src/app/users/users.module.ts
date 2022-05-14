import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';


import { PostsComponent } from './posts/posts.component';
import { TestComponent } from './test-schematics/test/test.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationTestComponent } from './test-schematics/navigation-test/navigation-test.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableTestComponent } from './test-schematics/table-test/table-test.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardTestComponent } from './test-schematics/dashboard-test/dashboard-test.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DraganddropComponent } from './test-schematics/draganddrop/draganddrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PostFormComponent } from './post-form/post-form.component';
import { TextInputComponent } from './custom-inputs/name-input/name-input.component';
import { UploadComponent } from './upload/upload.component';
import { AddressInputComponent } from './custom-inputs/address-input/address-input.component';
import { PhoneInputComponent } from './custom-inputs/phone-input/phone-input.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    UserFormComponent,
    PostsComponent,
    TestComponent,
    NavigationTestComponent,
    TableTestComponent,
    DashboardTestComponent,
    DraganddropComponent,
    PostFormComponent,
    TextInputComponent,
    UploadComponent,
    AddressInputComponent,
    PhoneInputComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    MatProgressBarModule,


  ],  
  providers: [UsersService,]

})
export class UsersModule { }
