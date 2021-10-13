import { Component, OnInit } from '@angular/core';

import {GlobalService} from '../../../global.service';

//import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'app-ba-pagetop',
  templateUrl: './ba-pagetop.component.html',
  styleUrls: ['./ba-pagetop.component.scss']
})
export class BaPagetopComponent implements OnInit {
//export class BaPagetopComponent implements OnInit {
  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;


  constructor(private _state:GlobalService) {
    //this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
    //  this.isMenuCollapsed = isCollapsed;
    //});
  }

  ngOnInit(): void {
  }
  public toggleMenu() {
    //this.isMenuCollapsed = !this.isMenuCollapsed;
    //this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    //this._state.collapsed=!this._state.collapsed;
    return false;
  }

  public scrolledChanged(isScrolled:any) {
    
    this.isScrolled = isScrolled;
    console.log('scrolled '+this.isScrolled);
  }  

}
