import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IAssignedToPost } from 'src/app/models/assigned-to-post';
import { IPostModel } from 'src/app/models/posts_interface';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-posts-for-volunteers-by-account',
  templateUrl: './posts-for-volunteers-by-account.component.html',
  styleUrls: ['./posts-for-volunteers-by-account.component.css']
})
export class PostsForVolunteersByAccountComponent implements OnInit, AfterViewInit{
  displayedColumns = ['createdBy','phone', 'address', 'details', 'availability','scheduledTime', 'status'];
  data: IAssignedToPost[] = [];
  dataSource = new MatTableDataSource<IAssignedToPost>();

  @ViewChild(MatSort) sort!: MatSort;

  clickedRows = new Set<IAssignedToPost>();

  statusOptions = postStatusData;
  
  row:any;

  linkAll = 'posts-for-volunteers';
  linkUsersOnly = 'posts-for-volunteers-by-account';
  
  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {

}

 ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.usersService.getUserAssignments(this.dataExchange.volunteer.id).subscribe(res => {
      this.dataSource.data = res as IAssignedToPost[];
  })
  console.log(this.dataSource)
    this.dataSource.sort = this.sort;
  }

  clickEvent(){
    return this.router.navigateByUrl('/assignment-form');
  }

  onRowClicked(row:any) {
    this.dataExchange.assignmentForm = row
    console.log('Row clicked: ', this.dataExchange.assignmentForm);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value;
}
}