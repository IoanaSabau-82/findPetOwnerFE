import { Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { DataExchangeService } from '../services/data-exchange.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{


  //@Output() addressInput: EventEmitter<number> = new EventEmitter()
  //@Output() phoneInput: EventEmitter<number> = new EventEmitter()
  files:any[]=[];
  postForm!:FormGroup;

  response!: {'url':string[]};
  update=false;
  formPics!:any;

  statusOptions = postStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private data: DataExchangeService, private location: Location) { 
  }

  ngOnInit(): void {
    if (this.data.postForm){
      this.updatePost();
      this.update = true;
      console.log('chem update',this.data.postForm)
    }
    else{
      console.log('chem create')
      this.createPost();
    }
  }


createPost():void{
this.postForm = this.fb.group({
  createdBy: [{'id':this.data.userFormDataBasicUser.id}],
  phone: [this.data.userFormData.phone,[Validators.required]],
  address:[this.data.userFormData.address,[Validators.required]],
  availability:[],
  details:['',[Validators.required]],
  postStatus:[0,[Validators.required]],
  cipId:[0,[Validators.required]],
});}

updatePost():void{
  this.postForm = this.fb.group({
    createdBy: [this.data.postForm.id],
    phone:[this.data.postForm.phone],
    address: [this.data.postForm.address],
    availability: [this.data.postForm.availability],
    details: [this.data.postForm.details],
    postStatus: [this.data.postForm.postStatus],
    cipId: [this.data.postForm.cipId],
    pictures: [this.data.postForm.pictures],
 });
  this.files[0]=this.pictures?.value;
  console.log('files list on update', this.files)
}

  /*ngOnChanges(changes: SimpleChanges): void {
    this.phoneInput.emit(this.phone?.value)
    this.addressInput.emit(this.address?.value)
  }*/

onSubmit():void {
  if(!this.update){
    this.postForm.addControl('pictures',this.fb.control(this.files.flat(), [Validators.required]));
    this.usersService.postPost(this.postForm.value).subscribe();
  }
  else
  {
    this.postForm.patchValue({
      pictures: this.files.flat()});
    console.log(this.postForm.value, this.data.postForm.id)

    this.usersService.putPost(this.data.postForm.id, this.postForm.value).subscribe();
    this.update=false;
    this.data.postForm=null;
  }
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

get pictures(){
  return this.postForm.get('pictures')
}

uploadFinished = (event: any) => { 
this.response = event.filesUrls;
this.files.push(this.response);
console.log('after upload',this.files);
}

removePicture(pic:string){
const pictureName = pic.replace("https://findpetowner.blob.core.windows.net/file-container/",'')
this.usersService.deleteBlob(pictureName).subscribe(result=>console.log(result))
this.removeItem(pic);
}

removeItem(value:string){
  const index: number = this.pictures?.value.indexOf(value);
  this.pictures?.value.splice(index, 1);
  console.log('after remove',this.pictures)
}
}

  

  

