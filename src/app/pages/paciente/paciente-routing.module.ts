// paciente-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente.component';
import { PacienteHomeComponent } from '../paciente-home/paciente-home.component';
import { PacienteContaComponent } from '../paciente-conta/paciente-conta.component';
import { PacienteHistoricoExamesComponent } from '../paciente-historico-exames/paciente-historico-exames.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { PacienteAgendarConsultaComponent } from '../paciente-agendar-consulta/paciente-agendar-consulta.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { HospitalDetalhesComponent } from '../hospital-detalhes/hospital-detalhes.component';
import { MedicosComponent } from '../medicos/medicos.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
   component: PacienteComponent,
   children: [
    {
      path: '', component: PacienteHomeComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'historico', component: PacienteHistoricoExamesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'conta', component: PacienteContaComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'servicos/:id', component: ServicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'medicos/:id', component: MedicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'checkout/:id', component: CheckoutComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'hospitais/:id', component: HospitalDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
    {
      path: 'agendar-consulta', component: PacienteAgendarConsultaComponent,
      canActivate:[AuthGuard],
      data: { role: 'Paciente' }
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
