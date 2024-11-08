import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico.component';
import { NgModule } from '@angular/core';
import { MedicoHomepageComponent } from '../medico-homepage/medico-homepage.component';
import { MedicoConsultaDetalhesComponent } from '../medico-consulta-detalhes/medico-consulta-detalhes.component';
import { MedicoInserirRegistroComponent } from '../medico-inserir-registro/medico-inserir-registro.component';
import { MedicoHistoricoPacientesComponent } from '../medico-historico-pacientes/medico-historico-pacientes.component';
import { DetalhesPacienteComponent } from '../detalhes-paciente/detalhes-paciente.component';
import { CommonModule } from '@angular/common';
import { MedicoExameDetalhesComponent } from '../medico-exame-detalhes/medico-exame-detalhes.component';
import { AuthGuard } from '../guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
   component: MedicoComponent,
   children: [
    {
      path: '', component: MedicoHomepageComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'consulta-detalhes/:id', component: MedicoConsultaDetalhesComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'consulta-detalhes/:id/inserir-registro/:pacienteId', component: MedicoInserirRegistroComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'exame-detalhes/:id', component: MedicoExameDetalhesComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'exame-detalhes/:id/inserir-registro/:pacienteId', component: MedicoInserirRegistroComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'historico-pacientes', component: MedicoHistoricoPacientesComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'detalhes-paciente/:id', component: DetalhesPacienteComponent,
      canActivate:[AuthGuard]
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
