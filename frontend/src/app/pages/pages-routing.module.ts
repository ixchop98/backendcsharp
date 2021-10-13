import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { EditorComponent } from './editor/editor.component';
import { PageComponent } from './page.component';
//import { TablesComponent } from './tables/tables.component';
import {AuthGuard} from './auth.guard';
import { VerComponent } from './ver/ver.component';
import { CrearComponent } from './crear/crear.component';


const routes: Routes = [
  //{
    //path: '',
    //loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    //canLoad: [AuthGuard]
  //},
  //{
    //path: 'register',
    //loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  //},
  {
    path: '',
    component: PageComponent,
    //canActivate:[AuthGuard],
    children: [
      { path: '', component:DashboardComponent},
      { path: 'ver', component:VerComponent},
      { path: 'crear', component:CrearComponent},
      //{ path: 'consulta',component:ConsultaComponent },
      //{ path: 'transfer',component:TransferComponent },
      //{ path: 'report',component:ReportComponent },

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
