import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';

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
    path:'teste-menu', component: MenuAdmComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
