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

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit{

  minDate = new Date();
  update = false;

  assignmentForm = this.fb.group({
    assignedTo: [],
    post: [],
    scheduledTime:[],
    assignedStatus:[],
  });

  assignedOptions = assignedStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private dataExchange: DataExchangeService,private location: Location) { 
  }

  ngOnInit(): void {
    if (!this.dataExchange.postForm){
      this.updateAssignment();
      this.update = true;
      console.log('chem update',this.dataExchange.assignmentForm)
    }
    else
    this.createAssignment();
  }

createAssignment():void{
  this.assignmentForm.setValue({
    assignedTo: this.dataExchange.volunteer,
    post: this.dataExchange.postForm,
    scheduledTime: this.minDate,
    assignedStatus: 0
 });
  this.dataExchange.postForm=null;
}

updateAssignment():void{
  this.assignmentForm.setValue({
    assignedTo: this.dataExchange.volunteer,
    post: this.dataExchange.assignmentForm.post,
    scheduledTime: this.minDate,
    assignedStatus: this.assignedStatus,
 });
 this.dataExchange.assignmentForm=null;
}

onSubmit():void {
  console.log(this.update)
  if (!this.update){
    this.usersService.postAssignment(this.assignmentForm.value).subscribe();
  }
  else {
    console.log(this.assignmentForm.value, this.dataExchange.assignmentForm.id )
    this.usersService.putAssignment(this.dataExchange.assignmentForm.id, this.assignmentForm.value).subscribe();
  }
  this.location.back();
}

get scheduledTime(){
  return this.assignmentForm.get('scheduledTime')
}

get assignedStatus(){
  return this.assignmentForm.get('assignedStatus')
}
}