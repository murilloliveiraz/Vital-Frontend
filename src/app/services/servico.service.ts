import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { ServicoRequestContract } from '../models/servico/servicoRequestContract';
import { Observable } from 'rxjs';
import { ServicoResponseContract } from '../models/servico/servicoResponseContract';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = `${environment.endPoint}/servicos`;

  create(servico: ServicoRequestContract): Observable<ServicoResponseContract> {
    return this.httpClient.post<ServicoResponseContract>(`${this.baseURL}`, servico)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }

  getAll(): Observable<ServicoResponseContract[]> {
    return this.httpClient.get<ServicoResponseContract[]>(this.baseURL);
  }

  getAllExamsServices(): Observable<ServicoResponseContract[]> {
    return this.httpClient.get<ServicoResponseContract[]>(`${this.baseURL}/exames`);
  }

  getAllAppointmentsServices(): Observable<ServicoResponseContract[]> {
    return this.httpClient.get<ServicoResponseContract[]>(`${this.baseURL}/consultas`);
  }

  getAllIncludingDeleteds(): Observable<ServicoResponseContract[]> {
    return this.httpClient.get<ServicoResponseContract[]>(`${this.baseURL}/listar-todos`);
  }

  getById(id: number): Observable<ServicoResponseContract> {
    return this.httpClient.get<ServicoResponseContract>(`${this.baseURL}/${id}`);
  }

  getByName(nome: string): Observable<ServicoResponseContract> {
    return this.httpClient.get<ServicoResponseContract>(`${this.baseURL}/pesquisar/nome?nome=${nome}`);
  }

  update(id: number, servico: ServicoRequestContract): Observable<void> {
    return this.httpClient.put<void>(`${this.baseURL}/${id}`, servico);
  }
}
