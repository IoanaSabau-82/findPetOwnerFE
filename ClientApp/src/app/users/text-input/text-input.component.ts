import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input()
  label: string = '';

  // @Input()
  // parentForm!: FormGroup;

  // @Input()
  // fieldName!: string;

  // @Input()
  // control!: FormControl;

  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  @ViewChild('materialFormField', { static: true })
  public matFormField!: MatFormField;

  constructor() {}

  get formField(): FormControl {
    // const asd = this.parentForm?.get(this.fieldName) as FormControl;
    // console.log(this.formFieldControl);
    // console.log(asd);
    const asdd = this.formFieldControl.ngControl?.control as FormControl;
    return asdd;
  }

  ngOnInit(): void {
    // console.log(this.parentForm);
    // console.log(this.fieldName);
    // console.log(this.formField);

    this.matFormField._control = this.formFieldControl;
  }
}
