import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsModule as FM } from '@angular/forms';
import { ThemeModule } from '../../theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormioModule } from 'ng2-formio';
@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ThemeModule,
    FM,
    NgbModule
    //FormioModule 
  ]
})
export class FormsModule { }
