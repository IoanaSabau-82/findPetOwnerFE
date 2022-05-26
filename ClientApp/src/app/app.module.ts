import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIcon, MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { PostsForVolunteersComponent } from './posts-for-volunteers/posts-for-volunteers.component';
import { PostsForVolunteersByAccountComponent } from './posts-for-volunteers-by-account/posts-for-volunteers-by-account.component';
import { UploadComponent } from './upload/upload.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PostsComponent } from './posts/posts.component';
import { AddressInputComponent } from './custom-inputs/address-input/address-input.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { PhoneInputComponent } from './custom-inputs/phone-input/phone-input.component';
import { TextInputComponent } from './custom-inputs/text-input/text-input.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NameInputComponent } from '././custom-inputs/name-input/name-input.component';
import { UsersService } from './services/users.service';
import { MatCardModule } from '@angular/material/card';
import { DataExchangeService } from './services/data-exchange.service';
import { AssignedStatusPipe } from './pipes/assigned-status-pipe';
import { PostStatusPipePipe } from './pipes/post-status-pipe.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardInputComponent } from './custom-inputs/card-input/card-input.component';
import { UploadDirective } from './directives/upload.directive';
import { PostsByAccountComponent } from './posts-by-account/posts-by-account.component';
import { PostDeleteDialogComponent } from './post-delete-dialog/post-delete-dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ImagesGridComponent } from './images-grid/images-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostsForVolunteersComponent,
    PostsForVolunteersByAccountComponent,
    UploadComponent,
    UserFormComponent,
    PostsComponent,
    AddressInputComponent,
    AssignmentFormComponent,
    PhoneInputComponent,
    TextInputComponent,
    PostFormComponent,
    NameInputComponent,
    AssignedStatusPipe,
    PostStatusPipePipe,
    CardInputComponent,
    UploadDirective,
    PostsByAccountComponent,
    PostDeleteDialogComponent,
    ImagesGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSlideToggleModule,

  ],
  providers: [UsersService, DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
