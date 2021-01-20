import { Component, Input, OnInit } from '@angular/core';
import { PeopleInfo } from '../../interfaces';

@Component({
  selector: 'app-databox',
  templateUrl: './databox.component.html',
  styleUrls: ['./databox.component.css']
})
export class DataboxComponent implements OnInit {

  @Input() cardList: PeopleInfo[] = [];  @Input() cardTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
