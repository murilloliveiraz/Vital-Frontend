import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLoginRequest } from '../models/usuario/usuarioLoginRequest';
import { UsuarioLoginResponse } from '../models/usuario/usuarioLoginResponse';
import { environment } from '../environments/environment';
import { ResetPasswordContract } from '../models/utils/resetPasswordContract';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = environment["endPoint"];

  login(credenciais: UsuarioLoginRequest) {
    return this.httpClient.post<UsuarioLoginResponse>(`${this.baseURL}/usuarios/login`, credenciais)
  }

  loginWithGoogle(credentials: string){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post<UsuarioLoginResponse>(this.baseURL + "/usuarios/loginWithGoogle", JSON.stringify(credentials), {headers: header});
  }

  forgotMyPassword(email: string) {
    return this.httpClient.post<string>(`${this.baseURL}/usuarios/forgot-password`, { email })
  }

  resetPassword(usuario: ResetPasswordContract) {
    return this.httpClient.post<string>(`${this.baseURL}/usuarios/reset-password`, usuario)
  }
}
