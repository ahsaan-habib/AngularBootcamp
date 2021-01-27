import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {DistrictListRes} from '../../shared/interfaces';
import {environment} from '../../../environments/environment';

@Injectable()
export class DistrictService{

  constructor(private httpService: HttpService) {
  }

  public getDistrictList(): Promise<DistrictListRes>{
    const url = environment.url.getDistrictList;
    return this.httpService.get(url);
  }
}
