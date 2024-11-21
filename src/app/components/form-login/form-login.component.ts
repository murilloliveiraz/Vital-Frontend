import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { ToastrService } from 'ngx-toastr';
import { UsuarioLoginRequest } from 'src/app/models/usuario/usuarioLoginRequest';
import { UsuarioLoginResponse } from 'src/app/models/usuario/usuarioLoginResponse';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  isPopupVisible = false;
  isADM = false;

  constructor(public formBuilder: FormBuilder, private router: Router, private loginService: LoginService, public authService: AuthService, private toastr: ToastrService){}
  loginForm: FormGroup;

  showError() {
    this.toastr.error('Credenciais inválidas!', 'Erro ao fazer o login!');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      }
    )
    if (typeof window !== 'undefined') {
      //@ts-ignore
      window.onGoogleLibraryLoad = () => {
        //@ts-ignore
        google.accounts.id.initialize({
          client_id: environment.clientId,
          callback: this.handleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true,
          use_fedcm_for_prompt: true
        });
        //@ts-ignore
        google.accounts.id.renderButton(
          document.getElementById("googleButton"),
        { theme: "outline", size: "large", shape: "rectangular", width: 100 }
        );
        //@ts-ignore
        google.accounts.id.prompt((notification: PromptMomentNotification) => {});
      }
    }
  }

  async handleCredentialResponse(response: CredentialResponse){
    const observer = {
      next: (usuario: UsuarioLoginResponse) => {
        this.authService.setToken(usuario.token);
        this.authService.setEmailUser(this.dadosForm["email"].value);
        this.authService.UsuarioAutenticado(true);
        if(usuario.role == "Paciente"){
          this.router.navigate(['/paciente']);
        } else  if (usuario.role == "Medico"){
          this.router.navigate(['/medico']);
        }
      },
      error: (err: any) => {
        this.showError();
      }
    };

    this.loginService.loginWithGoogle(response.credential).subscribe(observer);
  }


  get dadosForm(){
    return this, this.loginForm.controls;
  }

  loginUser() {
    const observer = {
      next: (usuario: UsuarioLoginResponse) => {
        this.authService.setToken(usuario.token);
        this.authService.setEmailUser(this.dadosForm["email"].value);
        this.authService.UsuarioAutenticado(true);
        if(usuario.role == "Paciente"){
          this.router.navigate(['/paciente']);
        } else  if (usuario.role == "Medico"){
          this.router.navigate(['/medico']);
        }
      },
      error: (err: any) => {
        this.showError();
      }
    };

    const usuario: UsuarioLoginRequest = {
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('senha')?.value || '',
    }
    this.loginService.login(usuario).subscribe(observer);
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  isPopupVisible2 = false;

  showPopup2() {
    this.isPopupVisible2 = true;
  }

  closePopup2() {
    this.isPopupVisible2 = false;
  }
}
