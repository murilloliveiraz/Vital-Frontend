import { LoginComponent } from './../../pages/login/login.component';
import { Component, EventEmitter, Output, ViewChild, AfterViewInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLoginRequest } from 'src/app/models/usuario/usuarioLoginRequest';
import { UsuarioLoginResponse } from 'src/app/models/usuario/usuarioLoginResponse';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-adm-login-form',
  templateUrl: './adm-login-form.component.html',
  styleUrls: ['./adm-login-form.component.css']
})

export class AdmLoginFormComponent {
  isPopupVisible = false; // Variável para controlar a visibilidade do popup


  showPopup() {
    this.isPopupVisible = true;
   // Muda para verdadeiro para mostrar o popup
  }


  closePopup() {
    this.isPopupVisible = false; // Para esconder o popup

  }

  isPopupVisible2 = false; // Variável para controlar a visibilidade do popup

  showPopup2() {
    this.isPopupVisible2 = true; // Muda para verdadeiro para mostrar o popup

  }

  closePopup2() {
    this.isPopupVisible2 = false; // Para esconder o popup

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
        if(usuario.role == "Administrador"){
          this.router.navigate(['/admin']);
        }
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };

    const usuario: UsuarioLoginRequest = {
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('senha')?.value || '',
    }

    this.loginService.login(usuario).subscribe(observer);
  }
}
