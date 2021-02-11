import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {DistrictListRes} from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class DistrictService{
  constructor(private httpService: HttpService){

  }

  public getStudentList(): Promise<DistrictListRes> {
    const url = environment.url.getDistrictList;
    return this.httpService.get(url);
  }

}
