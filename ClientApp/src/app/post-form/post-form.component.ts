import { Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import postStatusData from 'src/app/postStatus.json';
import { DataExchangeService } from '../services/data-exchange.service';
import { Location } from '@angular/common';
import { GeocodingService } from '../services/geocoding.service';
import { lastValueFrom, map } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{

  @Output() updateData = new EventEmitter<boolean>();

  files:any[]=[];
  postForm!:FormGroup;

  response!: {'url':string[]};
  update=false;
  formPics!:any;

  data$: any;
  lat:any;
  long:any;

  previousPage!:string;

  statusOptions = postStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private data: DataExchangeService, private location: Location, private geoLocation: GeocodingService, private router:Router) { 
    this.previousPage=this.router.getCurrentNavigation()!.previousNavigation!.finalUrl!.toString();
  }

  ngOnInit(): void {
    if (this.data.postForm){
      this.updatePost();
      this.update = true;
      console.log('calling update',this.data.postForm)
    }
    else{
      console.log('calling create')
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
    createdBy: [{'id':this.data.userFormDataBasicUser.id}],
    phone:[this.data.postForm.phone],
    address: [this.data.postForm.address],
    availability: [this.data.postForm.availability],
    details: [this.data.postForm.details],
    postStatus: [this.data.postForm.postStatus],
    cipId: [this.data.postForm.cipId],
    pictures: [this.data.postForm.pictures],
 });
  this.files=this.pictures?.value;
  console.log('files list on update', this.files)
}

 async onSubmit(){
  const data$=this.geoLocation.getLocation(this.address?.value).pipe(map(x=>x.results?.map(y=>y.geometry.location)))
  const result = await lastValueFrom(data$)
  const firstElem = result?.shift();
  const lat = firstElem?.lat;
  const lng = firstElem?.lng;
  console.log(lat, lng)
  this.postForm.addControl('lat', new FormControl(lat));
  this.postForm.addControl('lng', new FormControl(lng));
  console.log(this.postForm)
  if(!this.update){
    this.usersService.postPost(this.postForm.value).subscribe(error=>console.log(error));
  }
  else
  {
    console.log(this.postForm.value, this.data.postForm.id)
    this.usersService.putPost(this.data.postForm.id, this.postForm.value).subscribe();
    this.update=false;
    this.data.postForm=null;
  }
  this.router.navigate([this.previousPage]);
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
console.log('response and files initially',this.response, this.files)
this.files.push(this.response);
console.log('after upload',this.files);
if (!this.pictures)
  this.postForm.addControl('pictures',this.fb.control(this.files.flat(), [Validators.required]));
else
  this.postForm.patchValue({pictures: this.files.flat()});
console.log('ce se intampla la upload',this.pictures?.value)
}

removePicture(pic:string){
console.log('pic to be removed', pic)
const pictureName = pic.replace("https://findpetowner.blob.core.windows.net/file-container/",'')
this.removeItem(pic.toString());
this.usersService.deleteBlob(pictureName).subscribe();
}

removeItem(value:string){
  const index: number = this.files.findIndex(i => i.url ===value);
  this.files.splice(index, 1);
  this.postForm.patchValue({pictures: this.files.flat()});
}


}  



  

  

