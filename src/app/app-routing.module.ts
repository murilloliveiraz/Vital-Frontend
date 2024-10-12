import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PacienteHomeComponent } from './pages/paciente-home/paciente-home.component';
import { PacienteHistoricoExamesComponent } from './pages/paciente-historico-exames/paciente-historico-exames.component';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';
import { PacienteContaComponent } from './pages/paciente-conta/paciente-conta.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'paciente', component: PacienteHomeComponent
  },
  {
    path: 'paciente/historico', component: PacienteHistoricoExamesComponent
  },
  {
    path:'teste-menu', component: MenuAdmComponent
  },
  {
    path: 'paciente/conta', component: PacienteContaComponent
  },
  {
    path: '', component: LoginComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
