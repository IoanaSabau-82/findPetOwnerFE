import { DatePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSingleDateSelectionModel } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { min } from 'rxjs';
import assignedStatusData from 'src/app/assignedStatus.json';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';
import { NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';


@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css'],
  
})


export class AssignmentFormComponent implements OnInit{
  minDate = new Date();
  update = false;
  assignmentForm!:FormGroup

  assignedStatus_!:number;
  id!:string;
  scheduledTime_!:any;
  postId!:string;

  assignedOptions = assignedStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private dataExchange: DataExchangeService,private location: Location, private route:ActivatedRoute) {

  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      {this.assignedStatus_ = parseInt(params['assignedStatus']),
      this.id = params['id'],
      this.scheduledTime_ = params['scheduledTime']
      this.postId = params['postId']
      console.log('the params: ', params);
    });

    if (this.id == '')
    {
      this.createAssignment()
    }
    else
    {this.updateAssignment(),
    this.update=true}
  }
  
createAssignment():void{
  console.log('calling create')
  this.assignmentForm = this.fb.group({
    assignedTo: [this.dataExchange.volunteer],
    post: [{id:this.postId}],
    scheduledTime: [this.minDate],
    assignedStatus: [0]
 });
 console.log('form data', this.assignmentForm.value)
}   

updateAssignment():void{
  console.log('calling update', this.scheduledTime_, this.assignedStatus_)
  this.assignmentForm = this.fb.group({
    assignedTo: [this.dataExchange.volunteer],
    post: [{id:this.postId}],
    scheduledTime: [this.scheduledTime_],
    assignedStatus: [this.assignedStatus_],
 });
 console.log('form data', this.assignmentForm.value)
}

onSubmit():void {
  if (!this.update){
    console.log('submitting assignment', this.assignmentForm.value)
    this.usersService.postAssignment(this.assignmentForm.value).subscribe();
  }
  else {
    console.log('date formular plus id ',this.assignmentForm.value, this.id )
    this.usersService.putAssignment(this.id, this.assignmentForm.value).subscribe();
  }
  this.update=false;
  this.location.back();
}

get scheduledTime(){
  return this.assignmentForm.get('scheduledTime')
}

get assignedStatus(){
  return this.assignmentForm.get('assignedStatus')
}
}