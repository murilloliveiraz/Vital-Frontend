import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLoginRequest } from 'src/app/models/usuario/usuarioLoginRequest';
import { UsuarioLoginResponse } from 'src/app/models/usuario/usuarioLoginResponse';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  isPopupVisible = false;
  isADM = false;

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

  constructor(public formBuilder: FormBuilder, private router: Router, private loginService: LoginService, public authService: AuthService){}
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      }
    )
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
        alert('Ocorreu um erro');
      }
    };

    const usuario: UsuarioLoginRequest = {
      email: this.dadosForm["email"].value,
      password: this.dadosForm["senha"].value
    }
    this.loginService.login(usuario).subscribe(observer);
  }
}
