import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InserirRegistroNoProntuarioModel } from '../models/prontuario/inserirRegistroNoProntuarioModel';
import { Observable } from 'rxjs';
import { ProntuarioRegistro } from '../models/prontuario/prontuarioRegistro';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {
  private readonly baseURL = `${environment.endPoint}/prontuarios`;

  constructor(private http: HttpClient) {}

  createRecord(prontuarioId: number, dto: InserirRegistroNoProntuarioModel): Observable<void> {
    const url = `${this.baseURL}/${prontuarioId}/registros`;
    return this.http.post<void>(url, dto);
  }

  getPatientMedicalRecord(pacienteId: number): Observable<ProntuarioRegistro[]> {
    const url = `${this.baseURL}/${pacienteId}`;
    return this.http.get<ProntuarioRegistro[]>(url);
  }

  getAnSpecificRegister(registerId: string): Observable<ProntuarioRegistro> {
    const url = `${this.baseURL}/buscar-registro/${registerId}`;
    return this.http.get<ProntuarioRegistro>(url);
  }
}
