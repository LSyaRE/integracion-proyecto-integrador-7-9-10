import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivoFormComponent } from '../feature/motivo/form/motivo-form.component';
import { MotivoListComponent } from '../feature/motivo/list/motivo-list.component';
import { ModuloListComponent } from '../feature/modulo/list/modulo-list.component';
import { ModuloFormComponent } from '../feature/modulo/form/modulo-form.component';
import { RolFormComponent } from '../feature/rol/form/rol.form.component';
import { RolListComponent } from '../feature/rol/list/rol-list.component';
import { SugerenciaFormComponent } from '../feature/sugerencia/form/sugerencia-form.component';
import { SugerenciaListComponent } from '../feature/sugerencia/list/sugerencia-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'rol-form', component:RolFormComponent},
      {path: 'rol-form/:id', component:RolFormComponent},
      {path: 'rol-list', component:RolListComponent},
      {path: 'modulo-list', component:ModuloListComponent},
      {path: 'modulo-form', component:ModuloFormComponent},
      {path: 'modulo-form/:id', component:ModuloFormComponent},
      {path: 'motivo-form', component:MotivoFormComponent},
      {path: 'motivo-form/:id', component:MotivoFormComponent},
      {path: 'motivo-list', component:MotivoListComponent},
      {path: 'sugerencia-form', component:SugerenciaFormComponent},
      {path: 'sugerencia-form/:id', component:SugerenciaFormComponent},
      {path: 'sugerencia-list', component:SugerenciaListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }