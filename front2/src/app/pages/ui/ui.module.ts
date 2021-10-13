import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';

import { ThemeModule } from './../../theme/theme.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';


@NgModule({
  declarations: [
    UiComponent,
    ButtonsComponent,
    IconsComponent,
    GridComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    ThemeModule
  ]
})
export class UiModule { }
