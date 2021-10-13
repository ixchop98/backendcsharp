import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page.component';
import { ThemeModule } from '../theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerComponent } from './ver/ver.component';
import { CrearComponent } from './crear/crear.component';

//import { ConsultaComponent } from './consulta/consulta.component';
//import { TransferComponent } from './transfer/transfer.component';



@NgModule({
  declarations: [
    
  
    PageComponent,
    
    DashboardComponent,
          VerComponent,
          CrearComponent,
    
    //ConsultaComponent,
    //TransferComponent
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
