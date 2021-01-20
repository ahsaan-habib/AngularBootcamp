import { Injectable } from "@angular/core";
import { StudentListRes } from "src/app/shared/interfaces";
import { environment } from "src/environments/environment";
import { HttpService } from "./http.service";

@Injectable()
export class StudentService{

    constructor(private HttpService: HttpService){

    }

    public getStudentList(): Promise<StudentListRes> {
        const url = environment.url.getStudentList;
        return this.HttpService.get(url);
    }

}