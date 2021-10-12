import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page.component';
import { ThemeModule } from '../theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ConsultaComponent } from './consulta/consulta.component';
import { TransferComponent } from './transfer/transfer.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    
  
    PageComponent,
    
    DashboardComponent,
    
    ConsultaComponent,
    TransferComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NgbModule,    
     FormsModule,ReactiveFormsModule
  ],
  
})
export class PagesModule { }
