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
      path: 'agendar-exame/:id', component: AdminAgendarExameComponent
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
