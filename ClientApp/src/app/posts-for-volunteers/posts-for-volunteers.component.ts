import { SelectionModel } from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import {merge, Observable, of as observableOf} from 'rxjs';
import { IPostModel } from 'src/app/models/posts_interface';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts-for-volunteers',
  templateUrl: './posts-for-volunteers.component.html',
  styleUrls: ['./posts-for-volunteers.component.css']
})

export class PostsForVolunteersComponent implements OnInit, AfterViewInit{
  displayedColumns = ['createdBy','phone', 'address', 'details', 'availability'];
  clickedRows = new Set<IPostModel>();
  row:any;

  dataSource = new MatTableDataSource<IPostModel>();

  @ViewChild(MatSort) sort!: MatSort;

  linkAll = 'posts-for-volunteers';
  linkUsersOnly = 'posts-for-volunteers-by-account';

  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
    this.usersService.getOpenAssignments(). subscribe(res => {
      this.dataSource.data = res as IPostModel[]});
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  clickEvent(){
    return this.router.navigateByUrl('/assignment-form');
  }

  onRowClicked(row:any) {
    console.log('Row clicked: ', row);
    this.dataExchange.postForm = row;
}
}
