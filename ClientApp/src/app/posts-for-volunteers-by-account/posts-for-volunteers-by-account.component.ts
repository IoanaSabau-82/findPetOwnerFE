import { SelectionModel } from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import {merge, Observable, of as observableOf} from 'rxjs';
import { IAssignedToPost } from 'src/app/models/assigned-to-post';
import { IPostModel } from 'src/app/models/posts_interface';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';

@Component({
  selector: 'app-posts-for-volunteers-by-account',
  templateUrl: './posts-for-volunteers-by-account.component.html',
  styleUrls: ['./posts-for-volunteers-by-account.component.css']
})
export class PostsForVolunteersByAccountComponent implements OnInit{
  displayedColumns = ['createdBy','phone', 'address', 'details', 'availability','pictures','scheduledTime', 'status'];
  data: IAssignedToPost[] = [];
  clickedRows = new Set<IAssignedToPost>();

  statusOptions = postStatusData;
  
  row:any;

  linkAll = 'posts-for-volunteers';
  linkUsersOnly = 'posts-for-volunteers-by-account';
  
  assignedToId = 'B6DC674E-E6AE-4815-324C-08DA236C3BCC'
  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
    console.log(this.assignedToId);
    this.usersService.getUserAssignments(this.assignedToId).subscribe(x=>{this.data=x});
  }

  ngOnInit(): void {
  }

  clickEvent(){
    return this.router.navigateByUrl('/assignment-form');
  }

  onRowClicked(row:any) {
    this.dataExchange.assignmentForm = row
    console.log('Row clicked: ', this.dataExchange.assignmentForm);
}
}