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
import { CarreraFormComponent } from '../feature/carrera/form/carrera.form.component';
import { RespuestaFormComponent } from '../feature/respuesta/form/respuesta-form.component';
import { TicketFormComponent } from '../feature/ticket/form/ticket.form.component';
import { UsuarioFormComponent } from '../feature/usuario/form/usuario.form.component';
import { CarreraListComponent } from '../feature/carrera/list/carrera-list.component';
import { RespuestaListComponent } from '../feature/respuesta/list/respuesta-list.component';
import { TicketListComponent } from '../feature/ticket/list/ticket-list.component';
import { UsuarioListComponent } from '../feature/usuario/list/usuario-list.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'rol-form', component:RolFormComponent},
      {path: 'rol-form/:id', component:RolFormComponent},
      {path: 'modulo-form', component:ModuloFormComponent},
      {path: 'modulo-form/:id', component:ModuloFormComponent},
      {path: 'motivo-form', component:MotivoFormComponent},
      {path: 'motivo-form/:id', component:MotivoFormComponent},
      {path: 'sugerencia-form', component:SugerenciaFormComponent},
      {path: 'sugerencia-form/:id', component:SugerenciaFormComponent},
      {path: 'usuario-form', component:UsuarioFormComponent},
      {path: 'usuario-form/:id', component:UsuarioFormComponent},
      {path: 'carrera-form', component:CarreraFormComponent},
      {path: 'carrera-form/:id', component:CarreraFormComponent},
      {path: 'ticket-form', component:TicketFormComponent},
      {path: 'ticket-form/:id', component:TicketFormComponent},
      {path: 'respuesta-form', component:RespuestaFormComponent},
      {path: 'respuesta-form/:id', component:RespuestaFormComponent},
      {path: 'motivo-list', component:MotivoListComponent},
      {path: 'rol-list', component:RolListComponent},
      {path: 'sugerencia-list', component:SugerenciaListComponent},
      {path: 'modulo-list', component:ModuloListComponent},
      {path: 'respuesta-list', component: RespuestaListComponent},
      {path:'carrera-list',component:CarreraListComponent},
      {path: 'usuario-list', component: UsuarioListComponent},
      {path: 'ticket-list',component:TicketListComponent },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }