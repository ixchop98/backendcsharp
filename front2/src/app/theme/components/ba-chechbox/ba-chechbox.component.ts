import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  NgModel } from '@angular/forms';

@Component({
  selector: 'app-ba-chechbox',
  templateUrl: './ba-chechbox.component.html',
  styleUrls: ['./ba-chechbox.component.scss'],
  providers: [NgModel]
})

export class BaChechboxComponent  {  
  @Input() disabled:any;
  @Input() label:any;
  @Input() value:any;
  @Input() baCheckboxClass:any;
  @Input() myProp:Boolean=false;
  @Output()myPropChange = new EventEmitter<Boolean>();
  
  public state: any;



  public onChange(value: any) {

    this.myPropChange.emit(value.target.checked);
    
  }
}
