import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {environment} from '../../../environments/environment';
import {StudentListRes} from '../../shared/interfaces';

@Injectable()
export class StudentService{
  constructor(private httpService: HttpService) {

  }

  public getStudentList(): Promise<StudentListRes> {
    const url = environment.url.getStudentList;
    return this.httpService.get(url);
  }
}
