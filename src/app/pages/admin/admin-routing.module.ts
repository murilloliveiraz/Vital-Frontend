import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomepageComponent } from '../admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin.component';
import { AdminCadastrarPacienteComponent } from '../admin-cadastrar-paciente/admin-cadastrar-paciente.component';
import { AdminCadastrarServicosComponent } from '../admin-cadastrar-servicos/admin-cadastrar-servicos.component';
import { AdminAgendarExameComponent } from '../admin-agendar-exame/admin-agendar-exame.component';
import { AdminCadastrarHospitalComponent } from '../admin-cadastrar-hospital/admin-cadastrar-hospital.component';
import { AdminCadastrarMedicoComponent } from '../admin-cadastrar-medico/admin-cadastrar-medico.component';
import { AdminCadastrarAdminComponent } from '../admin-cadastrar-admin/admin-cadastrar-admin.component';
import { AdminServicosComponent } from '../admin-servicos/admin-servicos.component';
import { AdminHospitaisComponent } from '../admin-hospitais/admin-hospitais.component';
import { AdminMedicosComponent } from '../admin-medicos/admin-medicos.component';
import { MedicoConsultaDetalhesComponent } from '../medico-consulta-detalhes/medico-consulta-detalhes.component';
import { DetalhesPacienteComponent } from '../detalhes-paciente/detalhes-paciente.component';
import { AdminAgendamentosComponent } from '../admin-agendamentos/admin-agendamentos.component';
import { AdminHistoricoAgendamentosComponent } from '../admin-historico-agendamentos/admin-historico-agendamentos.component';
import { AdminPacienteAgendamentosComponent } from '../admin-paciente-agendamentos/admin-paciente-agendamentos.component';
import { AdminAnexarDocumentoComponent } from '../admin-anexar-documento/admin-anexar-documento.component';

const routes: Routes = [
  {
    path: '',
   component: AdminComponent,
   children: [
    {
      path: '', component: AdminHomepageComponent
    },
    {
      path: 'cadastrar-paciente', component: AdminCadastrarPacienteComponent
    },
    {
      path: 'servicos', component: AdminServicosComponent
    },
    {
      path: 'cadastrar-servico', component: AdminCadastrarServicosComponent
    },
    {
      path: 'hospitais', component: AdminHospitaisComponent
    },
    {
      path: 'cadastrar-hospital', component: AdminCadastrarHospitalComponent
    },
    {
      path: 'medicos', component: AdminMedicosComponent
    },
    {
      path: 'cadastrar-medico', component: AdminCadastrarMedicoComponent
    },
    {
      path: 'cadastrar-colaborador', component: AdminCadastrarAdminComponent
    },
    {
      path: 'historico', component: AdminHistoricoAgendamentosComponent
    },
    {
      path: 'historico/agendamentos-paciente/:pacienteId', component: AdminPacienteAgendamentosComponent
    },
    {
      path: 'agendamentos/novo', component: AdminAgendamentosComponent
    },
    {
      path: 'consulta-detalhes/:id', component: MedicoConsultaDetalhesComponent
    },
    {
      path: 'detalhes-paciente/:id', component: DetalhesPacienteComponent
    },
    {
      path: 'detalhes-paciente/:pacienteId/anexar-documento/:tipo/:id',
      component: AdminAnexarDocumentoComponent
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
