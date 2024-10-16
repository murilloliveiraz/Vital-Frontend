// paciente-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente.component';
import { PacienteHomeComponent } from '../paciente-home/paciente-home.component';
import { PacienteContaComponent } from '../paciente-conta/paciente-conta.component';
import { PacienteHistoricoExamesComponent } from '../paciente-historico-exames/paciente-historico-exames.component';

const routes: Routes = [
  {
    path: '',
   component: PacienteComponent,
   children: [
    {
      path: '', component: PacienteHomeComponent
    },
    {
      path: 'historico', component: PacienteHistoricoExamesComponent
    },
    {
      path: 'conta', component: PacienteContaComponent
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
