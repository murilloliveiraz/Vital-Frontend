import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomepageComponent } from '../admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin.component';
import { AdminCadastrarPacienteComponent } from '../admin-cadastrar-paciente/admin-cadastrar-paciente.component';
import { AdminCadastrarServicosComponent } from '../admin-cadastrar-servicos/admin-cadastrar-servicos.component';
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
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminColaboradoresComponent } from '../admin-colaboradores/admin-colaboradores.component';
import { AdminCadastrarColaboradorComponent } from '../admin-cadastrar-colaborador/admin-cadastrar-colaborador.component';
import { MedicosComponent } from '../medicos/medicos.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { HospitalDetalhesComponent } from '../hospital-detalhes/hospital-detalhes.component';
import { AdminAdicionarServicoAoHospitalComponent } from '../admin-adicionar-servico-ao-hospital/admin-adicionar-servico-ao-hospital.component';
import { MedicoExameDetalhesComponent } from '../medico-exame-detalhes/medico-exame-detalhes.component';
import { RegistroProntuarioDetalhesComponent } from 'src/app/components/registro-prontuario-detalhes/registro-prontuario-detalhes.component';

const routes: Routes = [
  {
    path: '',
   component: AdminComponent,
   children: [
    {
      path: '', component: AdminHomepageComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'pacientes/novo', component: AdminCadastrarPacienteComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'prontuario-registro/:id', component: RegistroProntuarioDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'servicos', component: AdminServicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'servicos/novo', component: AdminCadastrarServicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'adicionar-servicos', component: AdminAdicionarServicoAoHospitalComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'hospitais', component: AdminHospitaisComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'hospitais/novo', component: AdminCadastrarHospitalComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'medicos', component: AdminMedicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'hospitais/:id', component: HospitalDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'medicos/novo', component: AdminCadastrarMedicoComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'historico', component: AdminHistoricoAgendamentosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'historico/agendamentos-paciente/:pacienteId', component: AdminPacienteAgendamentosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'agendamentos/novo', component: AdminAgendamentosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'servicos/:id', component: ServicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'medicos/:id', component: MedicosComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'consulta-detalhes/:id', component: MedicoConsultaDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'exame-detalhes/:id', component: MedicoExameDetalhesComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'detalhes-paciente/:id', component: DetalhesPacienteComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'detalhes-paciente/:pacienteId/anexar-documento/:tipo/:id',
      component: AdminAnexarDocumentoComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
    {
      path: 'colaboradores', component: AdminColaboradoresComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },{
      path: 'colaboradores/novo', component: AdminCadastrarColaboradorComponent,
      canActivate:[AuthGuard],
      data: { role: 'Administrador' }
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
