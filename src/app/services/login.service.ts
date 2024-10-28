import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLoginRequest } from '../models/usuario/usuarioLoginRequest';
import { UsuarioLoginResponse } from '../models/usuario/usuarioLoginResponse';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = environment["endPoint"];

  login(credenciais: UsuarioLoginRequest) {
    return this.httpClient.post<UsuarioLoginResponse>(`${this.baseURL}/login`, credenciais)
  }

  loginWithGoogle(credentials: string){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    console.log(credentials);
    return this.httpClient.post<UsuarioLoginResponse>(this.baseURL + "/loginWithGoogle", JSON.stringify(credentials), {headers: header});
  }
}
