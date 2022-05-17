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

@Component({
  selector: 'app-posts-for-volunteers',
  templateUrl: './posts-for-volunteers.component.html',
  styleUrls: ['./posts-for-volunteers.component.css']
})

export class PostsForVolunteersComponent implements OnInit{
  displayedColumns = ['createdBy','phone', 'address', 'details', 'availability','pictures'];
  dataSource!:Observable<IPostModel[]>;
  data: IPostModel[] = [];
  clickedRows = new Set<IPostModel>();
  row:any;

  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
    this.usersService.getPosts().subscribe( x => {this.data = x;console.log(this.data)});
  }

  ngOnInit(): void {
  }

  clickEvent(){
    return this.router.navigateByUrl('/users/assignment-form');
  }

  onRowClicked(row:any) {
    console.log('Row clicked: ', row.id);
    this.dataExchange.assignmentFormData = row.id
}
}
