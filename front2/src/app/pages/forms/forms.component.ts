import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})
export class FormsComponent implements OnInit {
  public checkboxModel = [{
    label: 'Check 1',
    checked: false,
    class: 'col-md-4'
  }, {
    label: 'Check 2',
    checked: true,
    class: 'col-md-4'
  }, {
    label: 'Check 3',
    checked: false,
    class: 'col-md-4'
  }];
  //public checkboxPropertiesMapping = {
  //  model: 'checked',
  //  value: 'name',
  //  label: 'name',
  //  baCheckboxClass: 'class'
  //}; 
   

  isDisabled: Boolean = false;
  public _rate1 = 3;
  public _rate2 = 4;

  public _max1:number = 5;
  public _max2:number = 10;


  public defaultPicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU';
  public profile:any = {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU'
  };
  //public uploaderOptions:NgUploaderOptions = {
  //  // url: 'http://website.com/upload'
  //  url: '',
  //};


  
  constructor() { }

  ngOnInit(): void {
  }
  getvaluetest(){
    console.log(this.checkboxModel);
  }

}
