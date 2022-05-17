import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';

import { PostsComponent } from './posts/posts.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardTestComponent } from './test-schematics/dashboard-test/dashboard-test.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PostFormComponent } from './post-form/post-form.component';
import { TextInputComponent } from './custom-inputs/name-input/name-input.component';
import { UploadComponent } from './upload/upload.component';
import { AddressInputComponent } from './custom-inputs/address-input/address-input.component';
import { PhoneInputComponent } from './custom-inputs/phone-input/phone-input.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PostsForVolunteersComponent } from './posts-for-volunteers/posts-for-volunteers/posts-for-volunteers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostsForVolunteersByAccountComponent } from './posts-for-volunteers/posts-for-volunteers-by-account/posts-for-volunteers-by-account.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UserFormComponent,
    PostsComponent,
    AssignmentFormComponent,
    DashboardTestComponent,
    PostFormComponent,
    TextInputComponent,
    UploadComponent,
    AddressInputComponent,
    PhoneInputComponent,
    PostsForVolunteersComponent,
    NavBarComponent,
    PostsForVolunteersByAccountComponent,
    UsersComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,

  ],  
  providers: [UsersService,]

})
export class UsersModule { }
  