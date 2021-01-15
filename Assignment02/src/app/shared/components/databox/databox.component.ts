import { Component, Input, OnInit } from '@angular/core';
import { Card, Databox } from '../../interfaces';

@Component({
  selector: 'app-databox',
  templateUrl: './databox.component.html',
  styleUrls: ['./databox.component.css']
})
export class DataboxComponent implements OnInit {

  // @Input() info!: Databox; 
  @Input() cardList: Card[] = [];  @Input() cardTitle = '';


  constructor() { }

  ngOnInit(): void {
  }

}
