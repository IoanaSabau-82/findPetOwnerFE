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
import postStatusData from 'src/app/postStatus.json';
import { MatTableDataSource } from '@angular/material/table';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-posts-for-volunteers',
  templateUrl: './posts-for-volunteers.component.html',
  styleUrls: ['./posts-for-volunteers.component.css']
})

export class PostsForVolunteersComponent implements OnInit{
  
  post!:IPostModel
  linkAll = 'posts-for-volunteers';
  linkUsersOnly = 'posts-for-volunteers-by-account';
  center!:google.maps.LatLngLiteral
  posts!:any;

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow

  icon= {url:"https://findpetowner.blob.core.windows.net/file-container/cute-puppy-dog-sitting-26968095.jpg",
        scaledSize: new google.maps.Size(60, 70),
  }

  constructor(private usersService :UsersService, private router:Router, private dataExchange: DataExchangeService) {
      this.posts = this.usersService.getOpenAssignments();
      console.log(this.posts)
  }

  ngOnInit(): void {
    this.center = {
      lat: this.dataExchange.userFormData.lat,
      lng: this.dataExchange.userFormData.lng,
    }
  }
  
  onRowClicked(post:IPostModel) {
    console.log('saving post data: ', post.id);
    this.dataExchange.postForm = {id:post.id};
}

openInfo(marker: MapMarker) {
  this.info.open(marker)
}


}
