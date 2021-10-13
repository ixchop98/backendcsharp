import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page.component';
//import { RegisterComponent } from './register/register.component';
//import { LoginModule } from './login/login.module';
import { ThemeModule } from '../theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorComponent } from './editor/editor.component';
//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { EditarArchivoComponent } from './editar-archivo/editar-archivo.component';
import { EliminarArchivoComponent } from './eliminar-archivo/eliminar-archivo.component';
import { AddAmigoComponent } from './add-amigo/add-amigo.component';
import { VerPublicosComponent } from './ver-publicos/ver-publicos.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FileCardComponent } from './file-card/file-card.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturasComponent } from './facturas/facturas.component';

import { NgbdModalContent } from './facturas/facturas.component';

//import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    //RegisterComponent
  
    PageComponent,
    EditorComponent,
    TablesComponent,
    DashboardComponent,
    SubirArchivoComponent,
    EditarArchivoComponent,
    EliminarArchivoComponent,
    AddAmigoComponent,
    VerPublicosComponent,
    UserCardComponent,
    FileCardComponent,
    CarritoComponent,
    FacturasComponent,
    NgbdModalContent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NgbModule,
    //LoginModule,
    CKEditorModule, FormsModule,
    //Ng2SmartTableModule
  ],
  
})
export class PagesModule { }
