import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import {  Card,  Databox } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  // public studentCardList: Card[];
  // public teacherCardList: Card[];

  // public studentTitle : Databox["cardTitle"] = "All Students";
  // public teacherTitle : Databox["cardTitle"] = "All Teachers";

  // public studentList : Databox["cardList"] = this.getCardList(false);
  // public teacherList : Databox["cardList"] = this.getCardList(true);
  
  public studentInfo: Databox = {
    cardTitle: "All Students", cardList : this.getCardList(false) 
  }
  public teacherInfo: Databox = {
    cardTitle: "All Teachers", cardList : this.getCardList(true) 
  }

  

  constructor() { 

    // this.studentCardList = this.getCardList(false);
    // this.teacherCardList = this.getCardList(true);

  }

  ngOnInit(): void {
  }

  private getCardList(teacherStatus: boolean) :Card[]{
    let allCard : Card[] = [
    {name: 'Habib' , count: 3, subject: 'English', isTeacher: false, body: 'We will learn english'},
    {name: 'Sobuj' , count: 2, subject: 'Math', isTeacher: false, body: 'We will learn Math'},
    {name: 'Sathi' , count: 1, subject: 'Science',isTeacher: false, body: 'We will learn Science. and more and more We will learn full. and more We will learn fulland more We will learn full. and more We will learn fulland more We will learn full. and more We will learn full'},
    {name: 'Mahira' , count: 1, subject: 'English',isTeacher: true, body: 'I will teach English. and more'},
    {name: 'Sumon' , count: 3, subject: 'Math', isTeacher: true,  body: 'I will teach Math. and more'},
    {name: 'Rashed' , count: 1, subject: 'Science',isTeacher: true, body: 'Science is interesting subject. and more We will learn full. and more We will learn full.'},
    {name: 'Sakib' , count: 1, subject: 'English',isTeacher: true, body: 'I will teach English. and more'},
    {name: 'Mohon' , count: 3, subject: 'Math', isTeacher: true,  body: 'I will teach Math. and more  teach English. and more teach English. and more'}
  ];
    allCard.push({name: 'Swopon' , count: 3, subject: 'Math', isTeacher: true,  body: 'I will teach Math. and more'});
    allCard.push({name: 'Dibakor' , count: 1, subject: 'Science',isTeacher: true, body: 'Science is interesting subject. and more We will learn full. and more We will learn full.'});
    allCard.push({name: 'Shuvo' , count: 1, subject: 'English',isTeacher: true, body: 'I will teach English. and more'});
 
    return allCard.filter(data=>{
      return data.isTeacher === teacherStatus;
    });
  }


}
