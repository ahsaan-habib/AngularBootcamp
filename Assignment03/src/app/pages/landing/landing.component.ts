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
    cardTitle: 'All Students', cardList : []
  };
  public teacherInfo: Databox = {
    cardTitle: 'All Teachers', cardList : []
  };

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

}
