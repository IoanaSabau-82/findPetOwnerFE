import { Component, Input, OnInit } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.css']
})
export class SelectAllComponent implements OnInit {

  @Input() matSelect!: MatSelect;
  @Input() toggleOn:boolean = false;
  icon!:string;

  constructor() { }

  ngOnInit(): void {}

  selectAllToggle() {
    const selected = this.matSelect.options.find(opt => opt.selected);
    if (selected) {
      this.matSelect.options.forEach((item: MatOption) => item.deselect());
    } else {
      this.matSelect.options.forEach((item: MatOption) => item.select());
    }
  }

}
