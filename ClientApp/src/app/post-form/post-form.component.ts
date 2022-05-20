import { Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { DataExchangeService } from '../services/data-exchange.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnChanges{


  @Output() addressInput: EventEmitter<number> = new EventEmitter()
  files:any[]=[];

  postForm = this.fb.group({
    createdBy: [{'id':this.data.userFormData.id}],
    phone: [this.data.userFormData.phone,[Validators.required]],
    address:[this.data.userFormData.address,[Validators.required]],
    availability:[],
    details:['',[Validators.required]],
    postStatus:[0,[Validators.required]],
    cipId:[0,[Validators.required]]
  });

  response!: {'url':string[]};

  statusOptions = postStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private data: DataExchangeService) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addressInput.emit(this.address?.value)
  }

onSubmit():void {
  this.postForm.addControl('pictures',this.fb.control(this.files.flat(), [Validators.required]));
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
  return this.postForm.get('postStatus')
}

uploadFinished = (event: any) => { 
this.response = event.filesUrls;
this.files.push(this.response);
console.log(this.files);
}
}

  

  

