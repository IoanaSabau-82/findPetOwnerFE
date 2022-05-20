import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {

  @Input()
  name!:string;

  @Input()
  date!:Date;

  @Input()
  details!:string;

  @Input()
  pictures!:string;

  @Input()
  status!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
