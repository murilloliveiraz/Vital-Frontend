import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { AgendarConsultaResponseContract } from '../models/consulta/agendarConsultaResponseContract';
import { AgendarConsultaRequestContract } from '../models/consulta/agendarConsultaRequestContract';
import { ConsultaConcluidaResponseContract } from '../models/consulta/consultaConcluidaResponseContract';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private baseUrl = `${environment.endPoint}/consultas`

  constructor(private http: HttpClient) {}

  agendarConsulta(model: AgendarConsultaRequestContract): Observable<AgendarConsultaResponseContract> {
    return this.http.post<AgendarConsultaResponseContract>(`${this.baseUrl}/agendar`, model);
  }

  agendarConsultaRemota(model: AgendarConsultaRequestContract): Observable<AgendarConsultaResponseContract> {
    return this.http.post<AgendarConsultaResponseContract>(`${this.baseUrl}/agendar-remota`, model);
  }

  getConsultas(): Observable<AgendarConsultaResponseContract[]> {
    return this.http.get<AgendarConsultaResponseContract[]>(this.baseUrl);
  }

  getConsultaById(id: number): Observable<AgendarConsultaResponseContract> {
    return this.http.get<AgendarConsultaResponseContract>(`${this.baseUrl}/${id}`);
  }

  getConsultasConcluidas(): Observable<ConsultaConcluidaResponseContract[]> {
    return this.http.get<ConsultaConcluidaResponseContract[]>(`${this.baseUrl}/concluidos`);
  }

  getConsultasConcluidasPorPaciente(id: number): Observable<ConsultaConcluidaResponseContract[]> {
    return this.http.get<ConsultaConcluidaResponseContract[]>(`${this.baseUrl}/paciente/${id}/concluidos`);
  }

  getConsultasAgendadasPorPaciente(id: number): Observable<AgendarConsultaResponseContract[]> {
    return this.http.get<AgendarConsultaResponseContract[]>(`${this.baseUrl}/paciente/${id}/agendados`);
  }

  getConsultasConcluidasPorMedico(id: number): Observable<ConsultaConcluidaResponseContract[]> {
    return this.http.get<ConsultaConcluidaResponseContract[]>(`${this.baseUrl}/medico/${id}/concluidos`);
  }

  getConsultasAgendadasPorMedico(id: number): Observable<AgendarConsultaResponseContract[]> {
    return this.http.get<AgendarConsultaResponseContract[]>(`${this.baseUrl}/medico/${id}/agendados`);
  }

  getConsultasAgendadas(): Observable<AgendarConsultaResponseContract[]> {
    return this.http.get<AgendarConsultaResponseContract[]>(`${this.baseUrl}/agendados`);
  }

  atualizarConsulta(id: number, model: AgendarConsultaRequestContract): Observable<AgendarConsultaResponseContract> {
    return this.http.put<AgendarConsultaResponseContract>(`${this.baseUrl}/${id}`, model);
  }

  concluirPagamento(id: number): Observable<AgendarConsultaResponseContract> {
    return this.http.put<AgendarConsultaResponseContract>(`${this.baseUrl}/atualizar-pagamento/${id}`, id);
  }

  getDatasOcupadas(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/datas-ocupadas`);
  }

  concluirConsulta(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/concluir/${id}`, null);
  }

  deletarConsulta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
