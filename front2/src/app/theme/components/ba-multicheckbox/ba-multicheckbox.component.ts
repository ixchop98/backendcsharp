import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import {  NgModel } from '@angular/forms';
//import { stat } from 'fs';

@Component({
  selector: 'app-ba-multicheckbox',
  templateUrl: './ba-multicheckbox.component.html',
  styleUrls: ['./ba-multicheckbox.component.scss'],
  //providers: [NgModel]
})
export class BaMulticheckboxComponent implements OnInit {

  //@Input() baMultiCheckboxClass:any;
  //@Input() propertiesMapping:any;
  @Input() myProp: any;
  @Output()myPropChange = new EventEmitter<any[]>();
  public model: any;
  public state: any;
  public teststate=false;
  public constructor() {
  //public constructor(@Self() state:NgModel) {  
    //this.model = state;
    //state.valueAccessor = this;
    ;
    

  }
  ngOnInit(){
    //console.log('State');
    //console.log(this.myProp);
    //console.log('baMultiCheckboxClass');
    //console.log(this.baMultiCheckboxClass);
    //console.log('propertiesMappin');
    //console.log(this.propertiesMapping);
    //console.log('statevalueaccesoss');
    //console.log(this.model.valueAccessor);    
    console.log(this.myProp)
  }
  //public getProp(item: any, propName: string): string {
    //const prop = this.propertiesMapping[propName];

    //if (!prop) {
    //  return item[propName];
    //} else if (typeof prop === 'function') {
    //  return prop(item);
    //}
    //return item[prop];
  //}
  //public onChange(value: any): void {}
  //public onTouch(value: any): void {}
  //public writeValue(state: any): void {
  //  this.state = state;
  //}
//
  //public registerOnChange(fn: any): void {
  //  this.onChange = function(state: boolean) {
  //    this.writeValue(state);
  //    this.model.viewToModelUpdate(state);
  //  }
  //}
  //public registerOnTouched(fn: any): void { this.onTouch = fn; }

}
