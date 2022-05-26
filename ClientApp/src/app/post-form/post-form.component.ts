import { Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { DataExchangeService } from '../services/data-exchange.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnChanges{


  @Output() addressInput: EventEmitter<number> = new EventEmitter()
  @Output() phoneInput: EventEmitter<number> = new EventEmitter()
  files:any[]=[];

  postForm = this.fb.group({
    createdBy: [{'id':this.data.userFormDataBasicUser.id}],
    phone: [this.data.userFormData.phone,[Validators.required]],
    address:[this.data.userFormData.address,[Validators.required]],
    availability:[],
    details:['',[Validators.required]],
    postStatus:[0,[Validators.required]],
    cipId:[0,[Validators.required]]
  });

  response!: {'url':string[]};
  update=false;

  statusOptions = postStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private data: DataExchangeService, private location: Location) { 
  }

  ngOnInit(): void {
    if (this.data.postForm){
      this.updatePost();
      this.update = true;
      console.log('chem update',this.data.postForm)
    }
  }


updatePost():void{
  this.postForm.setValue({
    createdBy: this.data.basicUser,
    phone:this.data.postForm.phone,
    address: this.data.postForm.address,
    availability: this.data.postForm.availability,
    details: this.data.postForm.details,
    postStatus: this.data.postForm.postStatus,
    cipId: this.data.postForm.cipId,
    pictures: this.data.postForm.pictures
 });
 this.data.postForm=null;
}

  ngOnChanges(changes: SimpleChanges): void {
    this.phoneInput.emit(this.phone?.value)
    this.addressInput.emit(this.address?.value)
  }

onSubmit():void {
  if(this.update){
    console.log('update',this.postForm.value)
    this.usersService.putPost(this.data.postForm.id, this.postForm.value)
    this.update=false;
  }

  this.postForm.addControl('pictures',this.fb.control(this.files.flat(), [Validators.required]));
  console.log('create', this.postForm.value)
  this.usersService.postPost(this.postForm.value).subscribe();
  this.location.back();
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

  

  

