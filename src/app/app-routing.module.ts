import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewPasswordPopupComponent } from './components/new-password-popup/new-password-popup.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

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
    loadChildren: () => import('./pages/paciente/paciente-routing.module').then(m => m.PacienteRoutingModule),
    canActivate:[AuthGuard],
    data: { role: 'Paciente' }
  },
  {
    path: 'medico',
    loadChildren: () => import('./pages/medico/medico-routing.module').then(m => m.MedicoRoutingModule),
    canActivate:[AuthGuard],
    data: { role: 'Medico' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin-routing.module').then(m => m.AdminRoutingModule),
    canActivate:[AuthGuard],
    data: { role: 'Administrador' }
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
