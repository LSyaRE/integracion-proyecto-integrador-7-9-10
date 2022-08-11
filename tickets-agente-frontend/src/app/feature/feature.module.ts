import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolFormComponent } from './rol/form/rol.form.component';
import { RolListComponent } from './rol/list/rol-list.component';
import { RolToolbarComponent } from './rol/toolbar/rol-toolbar.component';
import { ModuloFormComponent } from './modulo/form/modulo-form.component';
import { ModuloToolbarComponent } from './modulo/toolbar/modulo-toolbar.component';
import { ModuloListComponent } from './modulo/list/modulo-list.component';
import { MotivoFormComponent } from './motivo/form/motivo-form.component';
import { MotivoListComponent } from './motivo/list/motivo-list.component';
import { MotivoToolbarComponent } from './motivo/toolbar/motivo-toolbar.component';
import { SugerenciaFormComponent } from './sugerencia/form/sugerencia-form.component';
import { SugerenciaListComponent } from './sugerencia/list/sugerencia-list.component';
import { SugerenciaToolbarComponent } from './sugerencia/toolbar/sugerencia-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ModuloComboboxComponent } from './modulo/combo-box/modulo-combobox.component';
import { MotivoComboboxComponent } from './motivo/combo-box/motivo-combobox.component';
import { RolSearchComponent } from './rol/search/rol-search.component';
import { SugerenciaSearchComponent } from './sugerencia/sugerencia-search/sugerencia-search.component';
import { PersonaComboboxComponent } from './persona/persona-combobox.component';
import { ModuloSearchComponent } from './modulo/modulo-search/modulo-search.component';
import { RolComboboxComponent } from './rol/combo-box/rol-combobox.component';
import { MotivoSearchComponent } from './motivo/motivo-search/motivo-search.component';


@NgModule({
  declarations: [
    RolFormComponent,
    RolListComponent,
    RolToolbarComponent,
    ModuloListComponent,
    ModuloFormComponent,
    ModuloToolbarComponent,
    MotivoFormComponent,
    MotivoListComponent,
    MotivoToolbarComponent,
    SugerenciaFormComponent,
    SugerenciaListComponent,
    SugerenciaToolbarComponent,
    ModuloComboboxComponent,
    MotivoComboboxComponent,
    RolSearchComponent,
    SugerenciaSearchComponent,
    PersonaComboboxComponent,
    ModuloSearchComponent,
    RolComboboxComponent,
    MotivoSearchComponent,
  ],

  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})

export class FeatureModule {}
