
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteHomeComponent } from './pages/paciente-home/paciente-home.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxSplideModule } from 'ngx-splide';
import { PacienteServicosComponent } from './components/paciente-servicos/paciente-servicos.component';
import { PacienteServicosCardComponent } from './components/paciente-servicos-card/paciente-servicos-card.component';
import { PacienteExameCardComponent } from './components/paciente-exame-card/paciente-exame-card.component';
import { PacienteUltimosExamesComponent } from './components/paciente-ultimos-exames/paciente-ultimos-exames.component';
import { ResetPasswordPopupComponent } from './components/reset-password-pop-up/reset-password-pop-up.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { PacienteHistoricoExamesComponent } from './pages/paciente-historico-exames/paciente-historico-exames.component';
import { CardExameHistoricoComponent } from './components/card-exame-historico/card-exame-historico.component';
import { CommonModule } from '@angular/common';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';
import { PacienteContaComponent } from './pages/paciente-conta/paciente-conta.component';
import { FormContaUsuarioComponent } from './components/form-conta-usuario/form-conta-usuario.component';
import { FormsModule } from '@angular/forms';
import { PacienteLaudosSliderComponent } from './components/paciente-laudos-slider/paciente-laudos-slider.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { MedicoHomepageComponent } from './pages/medico-homepage/medico-homepage.component';
import { UltimosPacientesCardComponent } from './components/ultimos-pacientes-card/ultimos-pacientes-card.component';
import { MedicoConsultaDetalhesComponent } from './pages/medico-consulta-detalhes/medico-consulta-detalhes.component';
import { MedicoInserirRegistroComponent } from './pages/medico-inserir-registro/medico-inserir-registro.component';
import { MedicoHistoricoPacientesComponent } from './pages/medico-historico-pacientes/medico-historico-pacientes.component';
import { DetalhesPacienteComponent } from './pages/detalhes-paciente/detalhes-paciente.component';
import { ProntuarioSliderComponent } from './components/prontuario-slider/prontuario-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteHomeComponent,
    ButtonLoginComponent,
    LoginComponent,
    FormLoginComponent,
    HeaderComponent,
    PacienteServicosComponent,
    PacienteServicosCardComponent,
    PacienteExameCardComponent,
    PacienteUltimosExamesComponent,
    ResetPasswordPopupComponent,
    BottomNavbarComponent,
    PacienteHistoricoExamesComponent,
    CardExameHistoricoComponent,
    MenuAdmComponent,
    PacienteContaComponent,
    FormContaUsuarioComponent,
    PacienteLaudosSliderComponent,
    PacienteComponent,
    MedicoComponent,
    MedicoHomepageComponent,
    UltimosPacientesCardComponent,
    MedicoConsultaDetalhesComponent,
    MedicoInserirRegistroComponent,
    MedicoHistoricoPacientesComponent,
    DetalhesPacienteComponent,
    ProntuarioSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSplideModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
