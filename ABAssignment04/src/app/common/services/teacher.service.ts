import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {TeacherListRes} from '../../shared/interfaces';
import {environment} from '../../../environments/environment';

@Injectable()
export class TeacherService{
  constructor(private httpService: HttpService) {

  }

  public getTeacherList(): Promise<TeacherListRes>{
    const url = environment.url.getTeacherList;
    return this.httpService.get(url);
  }
}
