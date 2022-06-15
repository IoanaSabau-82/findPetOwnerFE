import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPostModel } from 'src/app/models/posts_interface';
import { PostDeleteDialogComponent } from 'src/app/post-delete-dialog/post-delete-dialog.component';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UserFavFormService } from 'src/app/services/user-fav-form.service';
import { UsersService } from 'src/app/services/users.service';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent{

  @Input()
  formType:string = '';

  @Input()
  post!:IPostModel;

  toDelete!: Observable<any>;
  del!:string; 

  index!:any

  tilesOdd: any[] = [
    {cols: 2, rows: 1},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
  ];

  tilesEven: any[] = [
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1},
  ];

  userForm = this.fb.group({
    firstName: [this.dataExchange.userFormData.firstName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    lastName: [this.dataExchange.userFormData.lastName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    email: [this.dataExchange.userFormData.email,[Validators.required, Validators.email]],
    phone: [this.dataExchange.userFormData.phone,[Validators.required,Validators.pattern("^[0-9\-]+$")]],
    address: [this.dataExchange.userFormData.address,Validators.maxLength(50)]
  });

  constructor(private fb:FormBuilder,private usersService: UsersService, public dataExchange: DataExchangeService, public dialog: MatDialog, private router:Router) { 

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {this.del=result
      console.log(`Dialog result: ${this.del}`);

    if (this.del == "delete"){
      this.usersService.deletePost(this.post.id).subscribe();
    }
    });
  }
    
    onClickUpdate(post: IPostModel){
      this.router.navigate(['post-form'])
      this.dataExchange.postForm = post;
}
  onFavouriteClick(){
    this.userForm.addControl('favourites',this.fb.control([{id:this.post.id}]))
    console.log(this.userForm)
    this.usersService.put(this.dataExchange.userFormData.id,this.userForm.value).subscribe();

  }
}

