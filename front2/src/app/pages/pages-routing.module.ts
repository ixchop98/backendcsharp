import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAmigoComponent } from './add-amigo/add-amigo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarArchivoComponent } from './editar-archivo/editar-archivo.component';
import { EditorComponent } from './editor/editor.component';
import { EliminarArchivoComponent } from './eliminar-archivo/eliminar-archivo.component';
import { PageComponent } from './page.component';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { TablesComponent } from './tables/tables.component';
import { VerPublicosComponent } from './ver-publicos/ver-publicos.component';
import {AuthGuard} from './auth.guard';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturasComponent } from './facturas/facturas.component';

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
    //canActivate:[AuthGuard],
    children: [
      { path: '', component:DashboardComponent},
      { path: 'carrito', component:CarritoComponent},
      { path: 'facturas', component:FacturasComponent},
      
      //{ path: 'carrito', component:carrit}, 
      { path: 'Subir', component:SubirArchivoComponent},
      { path: 'Editar', component:EditarArchivoComponent},
      { path: 'Eliminar', component:EliminarArchivoComponent},
      { path: 'Agregar', component:AddAmigoComponent},
      { path: 'Publicos', component:VerPublicosComponent},

      { path: 'ui', loadChildren:()=> import ('./ui/ui.module' ).then(m=>m.UiModule),},
      { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),},
      {path:'editor', component:EditorComponent},
      {path:'tables', component:TablesComponent},

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
