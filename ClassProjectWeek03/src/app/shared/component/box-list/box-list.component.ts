import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {
  @Input() title = '';
  @Input() cardList: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
