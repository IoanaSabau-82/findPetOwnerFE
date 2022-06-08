import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';
import { IPostModel } from '../models/posts_interface';
import { DataExchangeService } from '../services/data-exchange.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() posts!:any;
  @Input() update!:boolean 

  post!:any
  center!:google.maps.LatLngLiteral
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow

  icon= {url:"https://findpetowner.blob.core.windows.net/file-container/cute-puppy-dog-sitting-26968095.jpg",
        scaledSize: new google.maps.Size(60, 70),
  }

  constructor(private dataExchange:DataExchangeService, private router:Router) {

  }

  ngOnInit(): void {
    this.center = {
      lat : this.dataExchange.userFormData.lat,
      lng : this.dataExchange.userFormData.lng
    }
  }
  
  onRowClicked(post:any) {
    console.log('saving post data: ', post);
    this.dataExchange.assignmentForm = post;
    this.router.navigate(['assignment-form',post])
}

  openInfo(marker: MapMarker) {
    this.info.open(marker)
  }

}
