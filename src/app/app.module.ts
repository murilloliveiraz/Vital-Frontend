
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteLaudosSliderComponent } from './components/paciente-laudos-slider/paciente-laudos-slider.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { MedicoHomepageComponent } from './pages/medico-homepage/medico-homepage.component';
import { UltimosPacientesCardComponent } from './components/ultimos-pacientes-card/ultimos-pacientes-card.component';
import { MedicoConsultaDetalhesComponent } from './pages/medico-consulta-detalhes/medico-consulta-detalhes.component';
import { MedicoInserirRegistroComponent } from './pages/medico-inserir-registro/medico-inserir-registro.component';
import { NewPasswordPopupComponent } from './components/new-password-popup/new-password-popup.component';
import { DetalhesPacienteComponent } from './pages/detalhes-paciente/detalhes-paciente.component';
import { MedicoHistoricoPacientesComponent } from './pages/medico-historico-pacientes/medico-historico-pacientes.component';
import { ProntuarioSliderComponent } from './components/prontuario-slider/prontuario-slider.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminCadastrarPacienteComponent } from './pages/admin-cadastrar-paciente/admin-cadastrar-paciente.component';
import { AdminCadastrarServicosComponent } from './pages/admin-cadastrar-servicos/admin-cadastrar-servicos.component';
import { AdminAgendarExameComponent } from './pages/admin-agendar-exame/admin-agendar-exame.component';
import { AgendarExameFormComponent } from './components/agendar-exame-form/agendar-exame-form.component';
import { AdminCadastrarHospitalComponent } from './pages/admin-cadastrar-hospital/admin-cadastrar-hospital.component';
import { AdminCadastrarMedicoComponent } from './pages/admin-cadastrar-medico/admin-cadastrar-medico.component';
import { AdminCadastrarAdminComponent } from './pages/admin-cadastrar-admin/admin-cadastrar-admin.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { PixFormComponent } from './components/pix-form/pix-form.component';
import { PacienteAgendarConsultaComponent } from './pages/paciente-agendar-consulta/paciente-agendar-consulta.component';
import { AgendarConsultaFormComponent } from './components/agendar-consulta-form/agendar-consulta-form.component';
import { AdmLoginFormComponent } from './components/adm-login-form/adm-login-form.component';
import { AdminServicosComponent } from './pages/admin-servicos/admin-servicos.component';
import { ServicoCardComponent } from './components/servico-card/servico-card.component';
import { AdminHospitaisComponent } from './pages/admin-hospitais/admin-hospitais.component';
import { HospitalCardComponent } from './components/hospital-card/hospital-card.component';
import { AdminMedicosComponent } from './pages/admin-medicos/admin-medicos.component';
import { MedicoCardComponent } from './components/medico-card/medico-card.component';
import { PacienteCardComponent } from './components/paciente-card/paciente-card.component';
import { AdminAgendamentosComponent } from './pages/admin-agendamentos/admin-agendamentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPacienteAgendamentosComponent } from './pages/admin-paciente-agendamentos/admin-paciente-agendamentos.component';
import { AdminHistoricoAgendamentosComponent } from './pages/admin-historico-agendamentos/admin-historico-agendamentos.component';
import { AdminAnexarDocumentoComponent } from './pages/admin-anexar-documento/admin-anexar-documento.component';
import { ConsultaCardComponent } from './components/consulta-card/consulta-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPStatus, LoaderMiddleware } from './middlewares/loader.middleware';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProntuarioFormComponent } from './components/prontuario-form/prontuario-form.component';
const RxJS = [LoaderMiddleware, HTTPStatus];
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
    NewPasswordPopupComponent,
    DetalhesPacienteComponent,
    MedicoHistoricoPacientesComponent,
    ProntuarioSliderComponent,
    AdminHomepageComponent,
    AdminComponent,
    AdminCadastrarPacienteComponent,
    AdminCadastrarServicosComponent,
    AdminAgendarExameComponent,
    AgendarExameFormComponent,
    AdminCadastrarHospitalComponent,
    AdminCadastrarMedicoComponent,
    AdminCadastrarAdminComponent,
    CheckoutComponent,
    CreditCardFormComponent,
    PixFormComponent,
    PacienteAgendarConsultaComponent,
    AgendarConsultaFormComponent,
    AdmLoginFormComponent,
    AdminServicosComponent,
    ServicoCardComponent,
    AdminHospitaisComponent,
    HospitalCardComponent,
    AdminMedicosComponent,
    MedicoCardComponent,
    PacienteCardComponent,
    AdminAgendamentosComponent,
    AdminPacienteAgendamentosComponent,
    AdminHistoricoAgendamentosComponent,
    AdminAnexarDocumentoComponent,
    ConsultaCardComponent,
    ProntuarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSplideModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    HTTPStatus,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderMiddleware, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
