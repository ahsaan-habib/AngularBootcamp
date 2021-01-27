import { Component, OnInit } from '@angular/core';
import {Card} from '../../shared/interfaces';
import {StudentService, TeacherService} from '../../common/services';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public studentTitle = 'All Students';
  public teacherTitle = 'All Teachers';

  public studentList: Card[] = [];
  public teacherList: Card[] = [];

  constructor(private studentService: StudentService, private teacherService: TeacherService) {
    this.setStudentList();
    this.setTeacherList();
  }

  ngOnInit(): void {
  }

  private setStudentList(): void{

    this.studentService.getStudentList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.studentList = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }

  private setTeacherList(): void{
    this.teacherService.getTeacherList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.teacherList = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }
}
