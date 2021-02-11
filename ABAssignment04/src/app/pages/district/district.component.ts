import { Component, OnInit } from '@angular/core';
import {DistrictInfo} from '../../shared/interfaces';
import {DistrictService} from '../../common/services';
import {DialogService} from "../../common/services/dialog.service";

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  public districtInfo: DistrictInfo[] = [];
  public deleteDistrictInfo : DistrictInfo[] = [];
  public numberOfDistrict = 0;
  public numberOfDeletedDistrict = 0;


  constructor(private districtService: DistrictService, private dialogService: DialogService) {
    this.setDistrictList();

  }
  private  setDistrictList(): void{
    this.districtService.getStudentList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.districtInfo = this.getRectifiedDistrict(res.data);
        this.setNumberOfDistrict(this.districtInfo);
      }
      else {
        console.log('Error', res);
      }
    });
  }

  ngOnInit(): void {
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
  public reCount(index: number): void{
    this.dialogService.setDialogData(
      {
      title: 'Delete Confirmation!',
      body: 'Are you sure to delete?',
      yesBtnClass: 'btn-danger'
    }
    ).then(data => {
        if (data === 'yes'){
          this.deleteTableRowByIndex(index);
        }
      }

    );
    // //call matDialog in constructor first
    // const dialogRef = this.dialog.open(DialogComponent,{
    //   data: {
    //     title: 'Delete Confirmation!',
    //     body: 'Are you sure to delete?'
    //   }
    // });
    //
    // dialogRef.afterClosed().subscribe(res => {
    //   if(res === 'yes'){
    //     this.deleteTableRowByIndex(event);
    //   }
    // });

  }

  public restoreFunc(index: number): void {
    this.dialogService.setDialogData(
      {
        title: 'Restore Confirmation!',
        body: 'Are you sure to restore data?',
        yesBtnClass: 'btn-success'
      }
    ).then(data => {
        if (data === 'yes') {
          this.restoreTableRowByIndex(index);
        }
      }
    );
  }

  restoreTableRowByIndex(index: number){
    this.districtInfo.push(this.deleteDistrictInfo[index]);
    this.numberOfDistrict = this.districtInfo.length;

    this.deleteDistrictInfo.splice(index, 1);
    this.numberOfDeletedDistrict = this.deleteDistrictInfo.length;
  }

  deleteTableRowByIndex(index: number){
    this.deleteDistrictInfo.push(this.districtInfo[index]);
    this.numberOfDeletedDistrict = this.deleteDistrictInfo.length;

    this.districtInfo.splice(index, 1);
    this.numberOfDistrict = this.districtInfo.length;
  }


}
