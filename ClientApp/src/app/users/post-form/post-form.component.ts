import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{

  postForm = this.fb.group({
    id: ['81B4F391-AF27-4424-322D-08DA2370E543',[Validators.required,]],
    phone: ['07500563'],
    address:['Oradea'],
    availability:[],
    details:[''],
    postStatus:['']

  });

  constructor(private usersService :UsersService, private fb:FormBuilder) { }

  onSubmit():void {
    console.log(this.postForm)
    this.usersService.post(this.postForm.value).subscribe();
}
get phone(){
  return this.postForm.get('phone')
}

get address(){
  return this.postForm.get('address')
}
}