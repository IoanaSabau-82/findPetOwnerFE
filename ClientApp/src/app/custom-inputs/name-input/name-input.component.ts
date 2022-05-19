import { AfterContentInit, Component, ContentChild, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit{

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