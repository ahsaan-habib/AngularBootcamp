import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: Card = { };

  constructor() { }

  ngOnInit(): void {
  }

}
