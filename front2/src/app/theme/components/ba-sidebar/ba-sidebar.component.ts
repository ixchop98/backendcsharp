import { Component, OnInit,ElementRef,HostListener ,AfterViewInit} from '@angular/core';
//import {Component, ElementRef, HostListener} from '@angular/core';
import {GlobalService} from '../../../global.service';
import {layoutSizes} from '../../../theme/theme.constant';
@Component({
  selector: 'app-ba-sidebar',
  templateUrl: './ba-sidebar.component.html',
  styleUrls: ['./ba-sidebar.component.scss']
})
export class BaSidebarComponent implements OnInit, AfterViewInit{
  //public menuHeight:number;
  public menuHeight:number=1;
  public isMenuCollapsed:boolean = false;
  public isMenuShouldCollapsed:boolean = false;
  active = 'top';

  //constructor(private _elementRef:ElementRef) {
  constructor(private _elementRef:ElementRef, private _state:GlobalService) {

    //this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
    //this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
    //  this.isMenuCollapsed = isCollapsed;
    //});    
  }
  public statecollapse(){
    return this._state.collapsed;
  }

  public ngOnInit(){
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
    //this.menuCollapse();
    //console.log(this._shouldMenuCollapse());
  }
//
  public ngAfterViewInit():void {
    setTimeout(() => this.updateSidebarHeight());
  }
  
  @HostListener('window:resize')
  public onWindowResize():void {

    var isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed:boolean):void {
    this.isMenuCollapsed = isCollapsed;
    //this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse():boolean {
    
    console.log(window.innerWidth);
    console.log(layoutSizes.resWidthCollapseSidebar);
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

}
