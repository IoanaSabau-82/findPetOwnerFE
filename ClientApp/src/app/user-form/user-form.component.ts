import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { DataExchangeService } from '../services/data-exchange.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{
  

  userForm = this.fb.group({
    firstName: [this.data.userFormData.firstName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    lastName: [this.data.userFormData.lastName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    email: [this.data.userFormData.email,[Validators.required, Validators.email]],
    phone: [this.data.userFormData.phone,[Validators.required,Validators.pattern("^[0-9\-]+$")]],
    address: [this.data.userFormData.address,Validators.maxLength(50)]
  });
 
  constructor(private usersService :UsersService, private fb:FormBuilder,private data :DataExchangeService, private location: Location) {
   }

  onSubmit():void {
    console.log(this.userForm)
    this.usersService.put(this.data.userFormData.id,this.userForm.value).subscribe();
    this.location.back();
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
}