import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { PacienteRequestContract } from '../models/paciente/pacienteRequestContract';
import { PacienteResponseContract } from '../models/paciente/pacienteResponseContract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = `${environment.endPoint}/pacientes`;

  create(paciente: PacienteRequestContract): Observable<PacienteResponseContract> {
    return this.httpClient.post<PacienteResponseContract>(`${this.baseURL}`, paciente)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }

  getAll(): Observable<PacienteResponseContract[]> {
    return this.httpClient.get<PacienteResponseContract[]>(this.baseURL);
  }

  getByCPF(cpf: string): Observable<PacienteResponseContract> {
    return this.httpClient.get<PacienteResponseContract>(`${this.baseURL}/pesquisar/cpf?cpf=${cpf}`);
  }

  getByEmail(email: string): Observable<PacienteResponseContract> {
    return this.httpClient.get<PacienteResponseContract>(`${this.baseURL}/pesquisar/email?email=${email}`);
  }

  getById(id: number): Observable<PacienteResponseContract> {
    return this.httpClient.get<PacienteResponseContract>(`${this.baseURL}/${id}`);
  }

  getByName(name: string): Observable<PacienteResponseContract[]> {
    return this.httpClient.get<PacienteResponseContract[]>(`${this.baseURL}/pesquisar/nome?name=${name}`);
  }

  update(id: number, paciente: PacienteRequestContract): Observable<void> {
    return this.httpClient.put<void>(`${this.baseURL}/${id}`, paciente);
  }
}
