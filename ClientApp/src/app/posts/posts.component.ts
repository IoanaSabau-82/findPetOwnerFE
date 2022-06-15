import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, filter, from, Observable, Subscription } from 'rxjs';
import { IPostModel } from 'src/app/models/posts_interface';
import { UsersService } from 'src/app/services/users.service';
import { DataExchangeService } from '../services/data-exchange.service';
import { map, switchMap, tap } from "rxjs/operators";
import { MatChip } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  faPlus = faPlus;
  linkAll = 'posts';
  linkUsersOnly = 'posts-by-account';
  posts!: Observable<IPostModel[]>;
  filteredPosts!: Observable<any>;
  optionsList = [0,1,2,3,4,5];
  options = new FormControl();

  subscription!: Subscription;
  
  constructor(private usersService :UsersService, public dataExchange: DataExchangeService, private router: Router) { }


  ngOnInit(): void {
    this.getPosts();
    this.subscription = this.usersService.refresh$.subscribe(()=>this.getPosts())
  }

  getPosts(){
    this.posts = this.usersService.getPosts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getFilteredItems() {
  this.posts=this.posts.pipe(map(posts=>posts.filter((post: { postStatus: number; })=>this.options.value.map(Number).includes(post.postStatus))));
  }

  callPostForm(){
  this.router.navigate(['post-form']);
  }
  }

