import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataExchangeService } from './data-exchange.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserFavFormService {

  userForm = this.fb.group({
    firstName: [this.data.userFormData.firstName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    lastName: [this.data.userFormData.lastName,[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    email: [this.data.userFormData.email,[Validators.required, Validators.email]],
    phone: [this.data.userFormData.phone,[Validators.required,Validators.pattern("^[0-9\-]+$")]],
    address: [this.data.userFormData.address,Validators.maxLength(50)]
  });
  
  constructor(private usersService :UsersService, private fb:FormBuilder,private data :DataExchangeService) { }
}
