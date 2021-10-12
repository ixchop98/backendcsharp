import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter 
  active = 'top';
  constructor(private _state:GlobalService) { }

  ngOnInit(): void {
  }
  statecollapse(){return this._state.collapsed}

}
