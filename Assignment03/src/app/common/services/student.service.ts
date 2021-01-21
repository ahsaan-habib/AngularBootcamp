import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import { StudentListRes } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService{
    constructor(private httpService: HttpService){

    }

    public getStudentList(): Promise<StudentListRes> {
        const url = environment.url.getStudentList;
        return this.httpService.get(url);
    }

}
