import { Component, OnInit } from '@angular/core';
import {DistrictService} from '../../common/services/district.service';
import {DistrictInfo} from '../../shared/interfaces';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  public districtList: DistrictInfo[] = [];
  public numberOfDistrict = 0;

  constructor(private districtService: DistrictService) {
    this.setDistrictData();
  }

  ngOnInit(): void {
  }

  private setDistrictData(): void{
    this.districtService.getDistrictList().then( res => {
      if ( res.serviceResult && res.serviceResult.success ){
        this.districtList = this.getRectifiedDistrict(res.data);
        this.setNumberOfDistrict(this.districtList);
      }
      else {
        console.error('Error', res);
      }
    });
  }

  // get rectified districts
  private getRectifiedDistrict(districtList: DistrictInfo[]): DistrictInfo[]{
    for (const dist of districtList){
      dist.density = Math.floor(dist.population / dist.areaSqKm);
    }
    return districtList;
  }

  private setNumberOfDistrict(arr: DistrictInfo[]): void{
    this.numberOfDistrict = arr.length;
  }

  public reCount(event: number): void{
    this.numberOfDistrict = this.districtList.length;
  }
}
