import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  text: string;
}
@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit {

  display = [
    {cols:3, rows:1},
    {cols:1, rows:2},
    {cols:1, rows:1},
    {cols:2, rows:1},
  ]

  dindex!:any;
  pics =[0,1,2,3]

  tiles: Tile[] = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four',color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
