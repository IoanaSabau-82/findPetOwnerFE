import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSingleDateSelectionModel } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import assignedStatusData from 'src/app/assignedStatus.json';
import { DataExchangeService } from 'src/app/services/data-exchange.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent {

  minDate = new Date();
  postId:any;

  assignmentForm = this.fb.group({
    assignedTo: [{'id':'B6DC674E-E6AE-4815-324C-08DA236C3BCC'}],//ar treb sa se ia datele din postul de la care am facut click
    scheduledTime:[this.minDate,[Validators.required]],
    assignedStatus:[0],
  });

  assignedOptions = assignedStatusData;
  constructor(private usersService :UsersService, private fb:FormBuilder, private dataExchange: DataExchangeService, private router:Router,) { 
    this.postId = dataExchange.assignmentFormData
    console.log(this.postId)
  }

onSubmit():void {
  this.assignmentForm.addControl('post',this.fb.control({'id':this.postId}, [Validators.required]));
  console.log(this.assignmentForm.value)
  this.usersService.postAssignment(this.assignmentForm.value).subscribe();
  this.router.navigateByUrl('/users/posts-for-volunteers')
}

get scheduledTime(){
  return this.assignmentForm.get('scheduledTime')
}

get assignedStatus(){
  return this.assignmentForm.get('assignedStatus')
}

}