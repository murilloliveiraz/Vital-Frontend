import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';
import { ResetPasswordPopupComponent } from './components/reset-password-pop-up/reset-password-pop-up.component';
import { NewPasswordPopupComponent } from './components/new-password-popup/new-password-popup.component';

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
    path: 'paciente',
    loadChildren: () => import('./pages/paciente/paciente-routing.module').then(m => m.PacienteRoutingModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./pages/medico/medico-routing.module').then(m => m.MedicoRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path:'atualizar-senha', component: NewPasswordPopupComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
