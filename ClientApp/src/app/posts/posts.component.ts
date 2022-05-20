import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IPostModel } from 'src/app/models/posts_interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  faPenToSquare = faPenToSquare;
  
  linkAll = 'posts';
  linkUsersOnly = 'posts-by-account';

  posts!: Observable<IPostModel[]>;
  constructor(private usersService :UsersService) { }

  ngOnInit(): void {
    this.posts = this.usersService.getPosts();
}
}