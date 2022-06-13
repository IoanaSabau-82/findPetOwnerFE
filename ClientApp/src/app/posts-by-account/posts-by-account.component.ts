import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPostModel } from '../models/posts_interface';
import { DataExchangeService } from '../services/data-exchange.service';
import { UsersService } from '../services/users.service';
import { switchMap} from "rxjs/operators";

@Component({
  selector: 'app-posts-by-account',
  templateUrl: './posts-by-account.component.html',
  styleUrls: ['./posts-by-account.component.css']
})
export class PostsByAccountComponent implements OnInit {

  linkAll = 'posts';
  linkUsersOnly = 'posts-by-account';

  formType="update"
  faPlus = faPlus;

  navigationSubscription!:any;

  posts!: Observable<IPostModel[]>;
  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
  }
  
  ngOnInit(): void {
    this.posts = this.usersService.getUserPosts(this.dataExchange.basicUser.id);

  }
}


