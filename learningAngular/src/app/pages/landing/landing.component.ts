import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public htmlData : Card = {title: 'HTML-CSS' , count: 3, frequent: 'Weekly', body: 'We will learn HTML-CSS'};
  public jsData: Card = {title: 'JavaScript' , count: 2, frequent: 'Weekly', body: 'We will learn js'};
  public angularData: Card = {title: 'Angular' , count: 1, frequent: 'Monthly', body: 'We will learn angular. and more'};
  
  constructor() { }

  ngOnInit(): void {
  }

}
