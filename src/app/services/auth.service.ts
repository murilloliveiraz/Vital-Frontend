import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usuarioAutenticado: boolean = false;
  private token: any;
  private user: any;

  constructor(private httpClient: HttpClient) {
  }

  checkToken() {
      return Promise.resolve(true);
  }

  UsuarioAutenticado(status: boolean) {
      localStorage.setItem('usuarioAutenticado', JSON.stringify(status));
      this.usuarioAutenticado = status;
  }

  UsuarioEstaAutenticado(): Promise<boolean> {
      this.usuarioAutenticado = localStorage.getItem('usuarioAutenticado') == 'true';
      return Promise.resolve(this.usuarioAutenticado);
  }

  setToken(token: string) {
      localStorage.setItem('token', token);
      this.token = token;
  }

  get getToken() {
      this.token = localStorage.getItem('token');
      return this.token;
  }

  limparToken() {
      this.token = null;
      this.user = null;
  }

  limparDadosUsuario() {
      this.UsuarioAutenticado(false);
      this.limparToken();
      localStorage.clear();
      sessionStorage.clear();
  }

  setEmailUser(email: string) {
    localStorage.setItem("emailUser", email);
  }

  getEmailUser(){
    var emailUserLogado = localStorage.getItem("emailUser");
    if(emailUserLogado){
      return emailUserLogado;
    }
    this.limparDadosUsuario();
    return "";
  }
}
