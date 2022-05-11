import { AfterContentInit, Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit{

  @Input()
  label: string ="";

  @Input()
  parentForm!: FormGroup;

  @Input()
  fieldName!: string;
  
  constructor() { }
  
  get formField(): FormControl{
    return this.parentForm?.get(this.fieldName) as FormControl;
    
  }
ngOnInit(): void {
  
  console.log(this.parentForm);
  console.log(this.fieldName);
  console.log(this.formField);
}
}