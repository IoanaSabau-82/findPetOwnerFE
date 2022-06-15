import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IPostModel } from '../models/posts_interface';
import { DataExchangeService } from '../services/data-exchange.service';
import { UsersService } from '../services/users.service';
import { switchMap} from "rxjs/operators";


@Component({
  selector: 'app-posts-by-account',
  templateUrl: './posts-by-account.component.html',
  styleUrls: ['./posts-by-account.component.css']
})
export class PostsByAccountComponent implements OnInit, OnDestroy {

  linkAll = 'posts';
  linkUsersOnly = 'posts-by-account';

  formType="update"
  faPlus = faPlus;

  posts!: Observable<IPostModel[]>;

  subscription!: Subscription;

  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getPosts();
    this.subscription = this.usersService.refresh$.subscribe(()=>this.getPosts())
  }

  getPosts(){
    this.posts = this.usersService.getUserPosts(this.dataExchange.basicUser.id);
  }

  callPostForm(){
    this.dataExchange.postForm = null;
    this.router.navigate(['post-form']);
    }
}


