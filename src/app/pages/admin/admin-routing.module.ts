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
import { AdminServicosComponent } from '../admin-servicos/admin-servicos.component';
import { AdminHospitaisComponent } from '../admin-hospitais/admin-hospitais.component';
import { AdminMedicosComponent } from '../admin-medicos/admin-medicos.component';
import { MedicoConsultaDetalhesComponent } from '../medico-consulta-detalhes/medico-consulta-detalhes.component';
import { DetalhesPacienteComponent } from '../detalhes-paciente/detalhes-paciente.component';
import { AdminAgendamentosComponent } from '../admin-agendamentos/admin-agendamentos.component';
import { AdminHistoricoAgendamentosComponent } from '../admin-historico-agendamentos/admin-historico-agendamentos.component';
import { AdminPacienteAgendamentosComponent } from '../admin-paciente-agendamentos/admin-paciente-agendamentos.component';
import { AdminAnexarDocumentoComponent } from '../admin-anexar-documento/admin-anexar-documento.component';
import { AuthGuard } from '../guard/auth-guard.service';
import { AdminColaboradoresComponent } from '../admin-colaboradores/admin-colaboradores.component';
import { AdminCadastrarColaboradorComponent } from '../admin-cadastrar-colaborador/admin-cadastrar-colaborador.component';

const routes: Routes = [
  {
    path: '',
   component: AdminComponent,
   children: [
    {
      path: '', component: AdminHomepageComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'pacientes/novo', component: AdminCadastrarPacienteComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'servicos', component: AdminServicosComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'servicos/novo', component: AdminCadastrarServicosComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'hospitais', component: AdminHospitaisComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'hospitais/novo', component: AdminCadastrarHospitalComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'medicos', component: AdminMedicosComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'medico/novo', component: AdminCadastrarMedicoComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'historico', component: AdminHistoricoAgendamentosComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'historico/agendamentos-paciente/:pacienteId', component: AdminPacienteAgendamentosComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'agendamentos/novo', component: AdminAgendamentosComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'consulta-detalhes/:id', component: MedicoConsultaDetalhesComponent,
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
    {
      path: 'colaboradores', component: AdminColaboradoresComponent,
      canActivate:[AuthGuard]
    },{
      path: 'colaboradores/novo', component: AdminCadastrarColaboradorComponent,
      canActivate:[AuthGuard]
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
