import { Component, OnInit } from '@angular/core';
import { StudentService, TeacherService } from 'src/app/common/services';
import { Databox } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {



  
  public studentInfo: Databox = {
    cardTitle: "All Students", cardList : [] 
  }
  public teacherInfo: Databox = {
    cardTitle: "All Teachers", cardList : []
  }

  constructor(private studentService: StudentService, private teacherService: TeacherService) {
    this.setStudentList();
    this.setTeacherList();
  }

  ngOnInit(): void {
  }

  private setStudentList(): void{

    this.studentService.getStudentList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.studentInfo.cardList = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }

  private setTeacherList(): void{
    this.teacherService.getTeacherList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.teacherInfo.cardList = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }











  // public studentInfo: Databox = {
  //   cardTitle: "All Students", cardList : this.getCardList(false)
  // }
  // public teacherInfo: Databox = {
  //   cardTitle: "All Teachers", cardList : this.getCardList(true)
  // }

  // // constructor(private studentService: StudentService, private teacherService: TeacherService) {
  // //   this.setStudentList();
  // //   this.setTeacherList();
  // // }
  
  // constructor(){
    
  // }


  // ngOnInit(): void {
  // }

  // private getCardList(teacherStatus: boolean) :Card[]{
  //   let allCard : Card[] = [
  //   {title: 'Habib' , count: 3, frequency: 'English', isTeacher: false, text: 'We will learn english'},
  //   {title: 'Sobuj' , count: 2, frequency: 'Math', isTeacher: false, text: 'We will learn Math'},
  //   {title: 'Sobuj' , count: 2, frequency: 'Math', isTeacher: false, text: 'We will learn Math'},
  //  ];

  //   allCard.push({title: 'Swopon' , count: 3, frequency: 'Math', isTeacher: true,  text: 'I will teach Math. and more'});
  //   allCard.push({title: 'Shuvo' , count: 1, frequency: 'English',isTeacher: true, text: 'I will teach English. and more'});
 
  //   return allCard.filter(data=>{
  //     return data.isTeacher === teacherStatus;
  //   });
  // }
}