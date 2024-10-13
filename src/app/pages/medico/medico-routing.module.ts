import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico.component';
import { NgModule } from '@angular/core';
import { MedicoHomepageComponent } from '../medico-homepage/medico-homepage.component';
import { MedicoConsultaDetalhesComponent } from '../medico-consulta-detalhes/medico-consulta-detalhes.component';
import { MedicoInserirRegistroComponent } from '../medico-inserir-registro/medico-inserir-registro.component';

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
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
