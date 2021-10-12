import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { TooltipModule } from 'ngx-';

//cl { RouterModule } from '@angular/router';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { NgUploaderModule } from 'ngx-uploader';

import { ThemeRoutingModule } from './theme-routing.module';
import { BaSidebarComponent } from './components/ba-sidebar/ba-sidebar.component';


import {
  //BaAmChart,
  //BaBackTop,
  //BaCard,
  //BaChartistChart,
  //BaCheckbox,
  //BaContentTop,
  //BaFullCalendar,
  //BaMenuItem,
  //BaMenu,
  //BaMsgCenter,
  //BaMultiCheckbox,
  //BaPageTop,
  //BaPictureUploader,
  //BaSidebarComponent
} from './components';
import { BaPagetopComponent } from './components/ba-pagetop/ba-pagetop.component';
import { BaMsgcenterComponent } from './components/ba-msgcenter/ba-msgcenter.component';
import { BaBacktopComponent } from './components/ba-backtop/ba-backtop.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaContenttopComponent } from './components/ba-contenttop/ba-contenttop.component';
import { BaCardComponent } from './components/ba-card/ba-card.component';
//import { BaChechboxComponent } from './components/ba-chechbox/ba-chechbox.component';
//import { BaMulticheckboxComponent } from './components/ba-multicheckbox/ba-multicheckbox.component';

import { FormsModule } from '@angular/forms';
//import { BaPictureuploaderComponent } from './components/ba-pictureuploader/ba-pictureuploader.component';
//import { NgbdDropdownForm } from './dropdown-form';




@NgModule({
  declarations: [
    BaSidebarComponent,
    BaPagetopComponent,
    BaMsgcenterComponent,
    BaBacktopComponent,
    BaContenttopComponent,
    BaCardComponent,
    //BaChechboxComponent,
    //BaMulticheckboxComponent,
    //BaPictureuploaderComponent,
    //ToastsContainer,
  
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgbModule,
    FormsModule 
  ],
  exports:[
    BaSidebarComponent,
    BaPagetopComponent,
    BaBacktopComponent,
    BaContenttopComponent,
    BaCardComponent,
    //BaChechboxComponent,
    //BaMulticheckboxComponent,
    //BaPictureuploaderComponent,
   // ToastsContainer
  ]
})
export class ThemeModule { }
