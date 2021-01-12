import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public premiumCardList: Card[];
  public freeCardList: Card[];

  // public htmlData : Card = {title: 'HTML-CSS' , count: 3, frequent: 'Weekly', body: 'We will learn HTML-CSS'};
  // public jsData: Card = {title: 'JavaScript' , count: 2, frequent: 'Weekly', body: 'We will learn js'};
  // public angularData: Card = {title: 'Angular' , count: 1, frequent: 'Monthly', body: 'We will learn angular. and more'};
  
  constructor() { 

    this.premiumCardList = this.getCardList(true);
    this.freeCardList = this.getCardList(false);

  }

  ngOnInit(): void {
  }

  

  private getCardList(prime: boolean) :Card[]{
    let allCard : Card[] = [];

    // allCard.push({title: 'HTML-CSS' , count: 3, frequent: 'Weekly', body: 'We will learn HTML-CSS'});
    // allCard.push({title: 'JavaScript' , count: 2, frequent: 'Weekly', body: 'We will learn js'});
    // allCard.push({title: 'Angular' , count: 1, frequent: 'Monthly', body: 'We will learn angular. and more'});

    allCard.push({title: 'HTML-CSS' , count: 3, frequent: 'Weekly', premium: false, body: 'We will learn HTML-CSS'});
    allCard.push({title: 'JavaScript' , count: 2, frequent: 'Weekly', premium: false, body: 'We will learn js'});
    allCard.push({title: 'Angular' , count: 1, frequent: 'Monthly', premium: false, body: 'We will learn angular. and more'});
    allCard.push({title: 'Front-end' , count: 1, frequent: 'Monthly', premium: true, body: 'We will learn front. and more'});
    allCard.push({title: 'Backend' , count: 3, frequent: 'weekly', premium: true,  body: 'We will learn back. and more'});
    allCard.push({title: 'Full-stack' , count: 1, frequent: 'Monthly', premium: true, body: 'We will learn full. and more We will learn full. and more We will learn full. and moreWe will learn full. and moreWe will learn full. and moreWe will learn full. and more'});
    allCard.push({title: 'Backend' , count: 3, frequent: 'weekly', premium: true,  body: 'We will learn back. and more'});
    allCard.push({title: 'Backend' , count: 3, frequent: 'weekly', premium: true,  body: 'We will learn back. and more'});
    allCard.push({title: 'Backend' , count: 3, frequent: 'weekly', premium: true,  body: 'We will learn back. and more'});

    return allCard.filter(data=>{
      return data.premium === prime;
    });
  }
 
  

}
