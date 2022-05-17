import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';

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

  response!: {'filesUrls':{'url':string}[]};

  statusOptions = postStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder) { }

onSubmit():void {
  this.postForm.addControl('pictures',this.fb.control(this.response.filesUrls, [Validators.required]));
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
  return this.postForm.get('postStatus')
}

uploadFinished = (event: any) => { 
this.response = event;
console.log(this.response);
}
}

  

  

