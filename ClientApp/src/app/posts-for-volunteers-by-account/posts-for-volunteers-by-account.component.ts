import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IAssignedToPost } from 'src/app/models/assigned-to-post';
import { IPostModel } from 'src/app/models/posts_interface';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-posts-for-volunteers-by-account',
  templateUrl: './posts-for-volunteers-by-account.component.html',
  styleUrls: ['./posts-for-volunteers-by-account.component.css']
})
export class PostsForVolunteersByAccountComponent implements OnInit{

  statusOptions = postStatusData;

  linkAll = 'posts-for-volunteers';
  linkUsersOnly = 'posts-for-volunteers-by-account';
  posts!:any;
  update = true;


  dataSource!:any;

  displayedColumns: string[] = ['address', 'scheduledTime','assignedStatus','update'];

  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService,private _liveAnnouncer: LiveAnnouncer) {
    this.usersService.getUserAssignments(dataExchange.volunteer.id).subscribe((result)=>{this.posts=result.map(x => ({lat:x.post.lat, lng:x.post.lng,assignedStatus:x.assignedStatus, id:x.id, scheduledTime:x.scheduledTime, postId:x.post.id, address:x.post.address}));this.dataSource.data = this.posts; console.log(this.posts)});
  }
  ngOnInit(): void {
  }
  
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

    this.dataSource = new MatTableDataSource(this.posts);
    console.log('sursa', this.dataSource.data)
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

openForm(post:any){
  this.router.navigate(['assignment-form',post])}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
  
