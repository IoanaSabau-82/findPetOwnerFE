import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { DataExchangeService } from '../services/data-exchange.service';
import { Location } from '@angular/common';
import { GeocodingService } from '../services/geocoding.service';
import { GeocoderResponse } from '../models/geocoder-response';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{
  
  result!:any;
 latLong!:any
 
  userForm = this.fb.group({
    firstName: [this.data.userFormData.firstName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    lastName: [this.data.userFormData.lastName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    email: [this.data.userFormData.email,[Validators.required, Validators.email]],
    phone: [this.data.userFormData.phone,[Validators.required,Validators.pattern("^[0-9\-]+$")]],
    address: [this.data.userFormData.address,Validators.maxLength(50)]
  });
  
  locationCoords: google.maps.LatLng|null = null;
 
  constructor(private usersService :UsersService, private fb:FormBuilder,private data :DataExchangeService, private location: Location, private geoLocation: GeocodingService) {
}


  get firstName(){
    return this.userForm.get('firstName')
  }

  get lastName(){
    return this.userForm.get('lastName')
  }

  get email(){
    return this.userForm.get('email')
  }

  get phone(){
    return this.userForm.get('phone')
  }

  get address(){
    return this.userForm.get('address')
  }

 async getLocation(address:string){
    this.geoLocation.getLocation(address).subscribe(
      (response: GeocoderResponse) => {
        if (response.status === 'OK' && response.results?.length) {
          const location = response.results[0];
          const loc: any = location.geometry.location;
          this.locationCoords = new google.maps.LatLng(loc.lat, loc.lng);
        }})
      return this.locationCoords
      }


  async onSubmit(){
    this.latLong = await this.getLocation(this.address?.value)
    this.userForm.addControl('coords',new FormControl(this.locationCoords));
    console.log(this.latLong,this.userForm)
    this.usersService.put(this.data.userFormData.id,this.userForm.value).subscribe();
   // this.location.back();
  }
}