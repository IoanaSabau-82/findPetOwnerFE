import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, filter, from, Observable } from 'rxjs';
import { IPostModel } from 'src/app/models/posts_interface';
import { UsersService } from 'src/app/services/users.service';
import { DataExchangeService } from '../services/data-exchange.service';
import { map, switchMap, tap } from "rxjs/operators";
import { MatChip } from '@angular/material/chips';

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
  refreshPosts = new BehaviorSubject<boolean>(true);
  checked = false;
  options = [0,1,2,3,4,5]


  constructor(private usersService :UsersService, public dataExchange: DataExchangeService) { }

  ngOnInit(): void {
    this.posts = this.usersService.getPosts(); 
}

getFilteredItems(postStatus: number) {

 this.posts=this.posts.pipe(map(posts=>posts.filter((post: { postStatus: number; })=>post.postStatus===1)));

}

toggleSelection(chip: MatChip) {
  chip.toggleSelected();
}

}
//.subscribe((response)=>console.log(response))