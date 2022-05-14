import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IPostModel } from 'src/app/models/posts_interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{

  postForm = this.fb.group({
    createdBy: [{'id':'81B4F391-AF27-4424-322D-08DA2370E543'}],
    phone: ['07500563'],
    address:['Oradea'],
    availability:['oricand'],
    details:['gasit catel in zona garii'],
    postStatus:[0],
  });

  post!: IPostModel;
  response!: {'filesUrls':{'url':string}[]};
  isCreate!: boolean;

  statusOptions = [0,1,2,3];
  constructor(private usersService :UsersService, private fb:FormBuilder) { }

onSubmit():void {
  console.log("on submit is called",this.response);
  this.postForm.addControl('pictures',this.fb.control(this.response.filesUrls, [Validators.required]));
  console.log(this.postForm)
  this.usersService.postPost(this.postForm.value).subscribe();
}

get phone(){
  return this.postForm.get('phone')
}

get address(){
  return this.postForm.get('address')
}

get availability(){
  return this.postForm.get('availabilty')
}

get details(){
  return this.postForm.get('details')
}

get status(){
  return this.postForm.get('details')
}

uploadFinished = (event: any) => { 
this.response = event;
}
}

  

  

