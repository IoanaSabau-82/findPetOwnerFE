import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IPostModel } from 'src/app/models/posts_interface';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-posts-for-volunteers',
  templateUrl: './posts-for-volunteers.component.html',
  styleUrls: ['./posts-for-volunteers.component.css']
})

export class PostsForVolunteersComponent{
  

  linkAll = 'posts-for-volunteers';
  linkUsersOnly = 'posts-for-volunteers-by-account';
  posts!:any;
  update=false;

  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
      this.usersService.getOpenAssignments().subscribe((result)=>{this.posts=result.map(x => ({lat:x.lat, lng:x.lng,assignedStatus:0, id:'', scheduledTime:'', postId:x.id}));console.log(this.posts)});
  }
  }

