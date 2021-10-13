import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { ModalsComponent } from './modals/modals.component';
import { UiComponent } from './ui.component';

const routes: Routes = [
  {
    path:'', component:UiComponent
    
  },
  {
    path:'bns', component:ButtonsComponent
  },
  {
    path:'icons', component:IconsComponent
  },
  {
    path:'grid', component:GridComponent
  }    ,
  {
    path:'modal', component:ModalsComponent
  }      

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
