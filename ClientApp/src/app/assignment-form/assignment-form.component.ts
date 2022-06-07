import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSingleDateSelectionModel } from '@angular/material/datepicker';
import { Router } from '@angular/router';
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

  assignedOptions = assignedStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private dataExchange: DataExchangeService,private location: Location) { 
  }

  ngOnInit(): void {
    if (this.dataExchange.assignmentForm){
      this.updateAssignment();
      this.update = true;
    }
    this.createAssignment()
  }

createAssignment():void{
  console.log('calling create')
  this.assignmentForm = this.fb.group({
    assignedTo: [this.dataExchange.volunteer],
    post: [this.dataExchange.postForm],
    scheduledTime: [this.minDate],
    assignedStatus: [{ value:0, disabled: true}]
 });
}

updateAssignment():void{
  console.log(this.dataExchange.assignmentForm)
  this.assignmentForm = this.fb.group({
    assignedTo: [this.dataExchange.volunteer],
    post: [this.dataExchange.assignmentForm.post],
    scheduledTime: [this.dataExchange.assignmentForm.scheduledTime],
    assignedStatus: [this.dataExchange.assignmentForm.assignedStatus],
 });
}

onSubmit():void {
  if (!this.update){
    console.log(this.dataExchange.postForm)
    this.assignmentForm.get('post')?.patchValue(this.dataExchange.postForm)
    console.log('submitting assignment', this.assignmentForm.value)
    this.usersService.postAssignment(this.assignmentForm.value).subscribe();
    this.dataExchange.postForm=null;
  }
  else {
    console.log(this.assignmentForm.value, this.dataExchange.assignmentForm.id )
    this.usersService.putAssignment(this.dataExchange.assignmentForm.id, this.assignmentForm.value).subscribe();
    this.dataExchange.assignmentForm=null;
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