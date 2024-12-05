import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { AgendarExameResponse } from '../models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from '../models/exame/ExameConcluidoResponse';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {
  private readonly apiUrl = `${environment.endPoint}/exames`;

  constructor(private http: HttpClient) {}

  agendarExame(model: any): Observable<AgendarExameResponse> {
    return this.http.post<AgendarExameResponse>(`${this.apiUrl}/agendar`, model);
  }

  anexarResultado(id: number, file: File): Observable<ExameConcluidoResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ExameConcluidoResponse>(`${this.apiUrl}/${id}/anexar-resultado`, formData);
  }

  obterExames(): Observable<AgendarExameResponse[]> {
    return this.http.get<AgendarExameResponse[]>(this.apiUrl);
  }

  obterExamePorId(id: number): Observable<AgendarExameResponse> {
    return this.http.get<AgendarExameResponse>(`${this.apiUrl}/${id}`);
  }

  obterExamesConcluidos(): Observable<ExameConcluidoResponse[]> {
    return this.http.get<ExameConcluidoResponse[]>(`${this.apiUrl}/concluidos`);
  }

  obterExamesConcluidosPorPaciente(id: number): Observable<ExameConcluidoResponse[]> {
    return this.http.get<ExameConcluidoResponse[]>(`${this.apiUrl}/paciente/${id}/concluidos`);
  }

  obterExamesAgendadosPorPaciente(id: number): Observable<AgendarExameResponse[]> {
    return this.http.get<AgendarExameResponse[]>(`${this.apiUrl}/paciente/${id}/agendados`);
  }

  obterExamesConcluidosPorMedico(id: number): Observable<ExameConcluidoResponse[]> {
    return this.http.get<ExameConcluidoResponse[]>(`${this.apiUrl}/medico/${id}/concluidos`);
  }

  obterExamesAgendadosPorMedico(id: number): Observable<AgendarExameResponse[]> {
    return this.http.get<AgendarExameResponse[]>(`${this.apiUrl}/medico/${id}/agendados`);
  }

  obterExamesAgendados(): Observable<AgendarExameResponse[]> {
    return this.http.get<AgendarExameResponse[]>(`${this.apiUrl}/agendados`);
  }

  atualizarExame(id: number, model: any): Observable<ExameConcluidoResponse> {
    return this.http.put<ExameConcluidoResponse>(`${this.apiUrl}/${id}`, model);
  }

  concluirExame(id: number): Observable<ExameConcluidoResponse> {
    return this.http.put<ExameConcluidoResponse>(`${this.apiUrl}/concluir/${id}`, id);
  }

  concluirPagamento(id: number): Observable<AgendarExameResponse> {
    return this.http.put<AgendarExameResponse>(`${this.apiUrl}/atualizar-pagamento/${id}`, id);
  }

  getDatasOcupadas(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/datas-ocupadas`);
  }

  adicionarResultadoUrlExterna(id: number, url: string): Observable<ExameConcluidoResponse> {
    return this.http.patch<ExameConcluidoResponse>(`${this.apiUrl}/${id}`, { url });
  }

  deletarExame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
