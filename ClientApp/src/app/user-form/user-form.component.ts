import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{
  

  userForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    lastName: ['',[Validators.required, Validators.maxLength(25), Validators.minLength(3), Validators.pattern("^[a-zA-Z\s]+$")]],
    email: ['',[Validators.required, Validators.email]],
    phone: ['',[Validators.required,Validators.pattern("^[0-9\-]+$")]],
    address: ['',Validators.maxLength(50)]
  });
 
  constructor(private usersService :UsersService, private fb:FormBuilder) {
   }

  onSubmit():void {
    console.log(this.userForm)
    this.usersService.post(this.userForm.value).subscribe();
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