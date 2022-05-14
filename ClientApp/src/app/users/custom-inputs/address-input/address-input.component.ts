import { Component, ContentChild, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent implements OnInit {

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