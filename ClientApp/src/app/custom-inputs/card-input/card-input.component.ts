import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IPostModel } from 'src/app/models/posts_interface';
import { PostDeleteDialogComponent } from 'src/app/post-delete-dialog/post-delete-dialog.component';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
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

  constructor(private usersService: UsersService, public dataExchange: DataExchangeService, public dialog: MatDialog) { 

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
    
    onClickUpdate(post:IPostModel){
      this.dataExchange.postForm = post;
}
}

