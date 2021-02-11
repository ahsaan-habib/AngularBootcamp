import { Component, Input, OnInit } from '@angular/core';
import { PeopleInfo } from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: PeopleInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
