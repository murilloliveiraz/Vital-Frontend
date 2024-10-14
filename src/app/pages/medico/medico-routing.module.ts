import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico.component';
import { NgModule } from '@angular/core';
import { MedicoHomepageComponent } from '../medico-homepage/medico-homepage.component';
import { MedicoConsultaDetalhesComponent } from '../medico-consulta-detalhes/medico-consulta-detalhes.component';
import { MedicoInserirRegistroComponent } from '../medico-inserir-registro/medico-inserir-registro.component';
import { MedicoHistoricoPacientesComponent } from '../medico-historico-pacientes/medico-historico-pacientes.component';
import { DetalhesPacienteComponent } from '../detalhes-paciente/detalhes-paciente.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
   component: MedicoComponent,
   children: [
    {
      path: '', component: MedicoHomepageComponent
    },
    {
      path: 'consulta-detalhes/:id', component: MedicoConsultaDetalhesComponent
    },
    {
      path: 'consulta-detalhes/:id/inserir-registro/:pacienteId', component: MedicoInserirRegistroComponent
    },
    {
      path: 'historico-pacientes', component: MedicoHistoricoPacientesComponent
    },
    {
      path: 'detalhes-paciente/:id', component: DetalhesPacienteComponent
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
