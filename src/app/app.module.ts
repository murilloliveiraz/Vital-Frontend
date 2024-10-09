
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
import { ResetPasswordPopupComponent } from './components/reset-password-pop-up/reset-password-pop-up.component';

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
    ResetPasswordPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSplideModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
