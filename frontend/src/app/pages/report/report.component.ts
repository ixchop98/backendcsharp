import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service'
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private _state:GlobalService) {}

  ngOnInit(): void {
  }
  submit():void{
    this._state.getReporte();
  }
}
