import {Component, Input, OnInit} from '@angular/core';
import {DistrictInfo} from '../../interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data!: DistrictInfo[];

  constructor() { }

  ngOnInit(): void {
  }

}
