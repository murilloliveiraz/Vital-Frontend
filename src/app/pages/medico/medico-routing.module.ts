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
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RegistroProntuarioDetalhesComponent } from 'src/app/components/registro-prontuario-detalhes/registro-prontuario-detalhes.component';
import { AdminAnexarDocumentoComponent } from '../admin-anexar-documento/admin-anexar-documento.component';

const routes: Routes = [
  {
    path: '',
   component: MedicoComponent,
   children: [
    {
      path: '', component: MedicoHomepageComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'consulta-detalhes/:id', component: MedicoConsultaDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'prontuario-registro/:id', component: RegistroProntuarioDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'consulta-detalhes/:id/inserir-registro/:pacienteId', component: MedicoInserirRegistroComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'exame-detalhes/:id', component: MedicoExameDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'exame-detalhes/:id/inserir-registro/:pacienteId', component: MedicoInserirRegistroComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'historico-pacientes', component: MedicoHistoricoPacientesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'detalhes-paciente/:id', component: DetalhesPacienteComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
    {
      path: 'detalhes-paciente/:pacienteId/anexar-documento/:tipo/:id',
      component: AdminAnexarDocumentoComponent,
      canActivate:[AuthGuard],
      data: { role: 'Medico' }
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
