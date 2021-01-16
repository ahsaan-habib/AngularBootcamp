import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {TeacherListRest} from '../../shared/interfaces';
import {environment} from '../../../environments/environment';

@Injectable()
export class TeacherService{
  constructor(private httpService: HttpService) {

  }

  public getTeacherList(): Promise<TeacherListRest>{
    const url = environment.url.getTeacherList;
    return this.httpService.get(url);
  }
}
