import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomepageComponent } from '../admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin.component';
import { AdminCadastrarPacienteComponent } from '../admin-cadastrar-paciente/admin-cadastrar-paciente.component';

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
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
