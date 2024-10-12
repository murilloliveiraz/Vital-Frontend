import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico.component';
import { NgModule } from '@angular/core';
import { MedicoHomepageComponent } from '../medico-homepage/medico-homepage.component';

const routes: Routes = [
  {
    path: '',
   component: MedicoComponent,
   children: [
    {
      path: '', component: MedicoHomepageComponent
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
