import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../custom-inputs/card-input/card-input.component';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-post-delete-dialog',
  templateUrl: './post-delete-dialog.component.html',
  styleUrls: ['./post-delete-dialog.component.css']
})
export class PostDeleteDialogComponent{

  @Output() deletePost: EventEmitter<number> = new EventEmitter();

  constructor(private usersService :UsersService, private router: Router, public dialogRef: MatDialogRef<PostDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) {}


  onDelete(){
    this.dialogRef.close('delete');
  }

  noDelete(){
    this.dialogRef.close(true);
  }
}

