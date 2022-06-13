import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, filter, from, Observable } from 'rxjs';
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

  refreshPosts = new BehaviorSubject<boolean>(true);

  constructor(private usersService :UsersService, public dataExchange: DataExchangeService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.refreshPosts.pipe(switchMap(_ =>this.usersService.getPosts()));
    this.refreshPosts.subscribe(res=>console.log(res))
}

getFilteredItems() {
 this.posts=this.posts.pipe(map(posts=>posts.filter((post: { postStatus: number; })=>this.options.value.map(Number).includes(post.postStatus))));
}

callPostForm(){
this.refreshPosts.next(false);
this.router.navigate(['post-form']);
}
}

