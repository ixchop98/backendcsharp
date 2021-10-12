import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { EditorComponent } from './editor/editor.component';
import { PageComponent } from './page.component';
//import { TablesComponent } from './tables/tables.component';
import {AuthGuard} from './auth.guard';
import { ConsultaComponent } from './consulta/consulta.component';
import { TransferComponent } from './transfer/transfer.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'pages',
    component: PageComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', component:DashboardComponent},
      { path: 'consulta',component:ConsultaComponent },
      { path: 'transfer',component:TransferComponent },
      { path: 'report',component:ReportComponent },

    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { 


  public prb(){
    //routes[3].children
  }
}
