import { Component, OnInit } from '@angular/core';
import {DistrictInfo} from '../../shared/interfaces';
import {DistrictService} from '../../common/services';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  // public districtInfo: DistrictInfo[] = []

  public districtInfo: DistrictInfo[] = [];

  constructor(private districtService: DistrictService) {
    this.setDistrictList();
  }
  private  setDistrictList(): void{
    this.districtService.getStudentList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.districtInfo = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }

  ngOnInit(): void {
  }

}
