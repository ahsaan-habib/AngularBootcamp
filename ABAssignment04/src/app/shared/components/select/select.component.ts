import {Component, Input, OnInit} from '@angular/core';
import { SelectData } from '../../interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    @Input() labelData!: string ;
    @Input() data: SelectData[] = [];
    @Input() selectedData: string | undefined;


    selectItem(event: Event) {
      this.selectedData = (event.target as HTMLSelectElement).value;
    }

}
