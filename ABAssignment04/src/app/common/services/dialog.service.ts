import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../shared/components/dialog/dialog.component";
import {DialogData} from "../../shared/components/dialog/dialog-data";

@Injectable()
export class DialogService {

  constructor(public dialog : MatDialog) {
  }

  public setDialogData(info: DialogData): Promise<any>{

    const promise = new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '500px',
        data: {
          title: info.title,
          body: info.body,
          yesBtnClass: info.yesBtnClass
        }
      });

      dialogRef.afterClosed().subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
    return promise;
  }




}
