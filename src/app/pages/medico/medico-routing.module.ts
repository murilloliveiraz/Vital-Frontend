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
import { RegistroProntuarioPreviewComponent } from 'src/app/components/registro-prontuario-preview/registro-prontuario-preview.component';
import { RegistroProntuarioDetalhesComponent } from 'src/app/components/registro-prontuario-detalhes/registro-prontuario-detalhes.component';
import { AdminAnexarDocumentoComponent } from '../admin-anexar-documento/admin-anexar-documento.component';

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
      path: 'prontuario-registro/:id', component: RegistroProntuarioDetalhesComponent,
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
    {
      path: 'detalhes-paciente/:pacienteId/anexar-documento/:tipo/:id',
      component: AdminAnexarDocumentoComponent,
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
