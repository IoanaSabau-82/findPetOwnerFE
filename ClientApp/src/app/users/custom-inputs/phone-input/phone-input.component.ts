import { Component, ContentChild, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  @Input()
  label: string ="";

  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  @ViewChild('materialFormField', { static: true })
  public matFormField!: MatFormField;

  constructor() {}

  get formField(): FormControl {
    const asdd = this.formFieldControl.ngControl?.control as FormControl;
    return asdd;
  }

  ngOnInit(): void {
    this.matFormField._control = this.formFieldControl;
  }
}

