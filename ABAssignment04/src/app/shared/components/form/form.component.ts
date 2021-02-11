import { Component, OnInit } from '@angular/core';
import {SelectData} from "../../interfaces";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public districtData: SelectData[] = [
      {value: 'Thakurgoan', viewValue: 'Thakurgoan'},
      {value: 'Kushtia', viewValue: 'Kushtia'},
      {value: 'Khulna', viewValue: 'Khulna'}
    ]

  public divisionData: SelectData[] = [
    {value: 'Khulna', viewValue: 'Khulna'},
    {value: 'Rangpur', viewValue: 'Rangpur'}
  ]


}
