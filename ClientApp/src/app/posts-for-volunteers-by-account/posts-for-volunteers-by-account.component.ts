import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IAssignedToPost } from 'src/app/models/assigned-to-post';
import { IPostModel } from 'src/app/models/posts_interface';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { map } from 'rxjs';

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
  
  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
    this.usersService.getUserAssignments(dataExchange.volunteer.id).subscribe((result)=>{this.posts=result.map(x => ({lat:x.post.lat, lng:x.post.lng,assignedStatus:x.assignedStatus, id:x.id, scheduledTime:x.scheduledTime, postId:x.post.id}));console.log(this.posts)});
  }
  ngOnInit(): void {
  }
  }
