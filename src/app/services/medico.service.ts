import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { MedicoResponseContract } from '../models/medico/medicoResponseContract';
import { MedicoRequestContract } from '../models/medico/medicoRequestContract';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = `${environment.endPoint}/medicos`;

  constructor(private http: HttpClient) { }

  create(medico: MedicoRequestContract): Observable<MedicoResponseContract> {
    return this.http.post<MedicoResponseContract>(`${this.apiUrl}`, medico);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<MedicoResponseContract[]> {
    return this.http.get<MedicoResponseContract[]>(this.apiUrl);
  }

  getByCRM(crm: string): Observable<MedicoResponseContract> {
    return this.http.get<MedicoResponseContract>(`${this.apiUrl}/pesquisar/crm?crm=${crm}`);
  }

  getByEmail(email: string): Observable<MedicoResponseContract> {
    return this.http.get<MedicoResponseContract>(`${this.apiUrl}/pesquisar/email?email=${email}`);
  }

  getAllBySpecialization(specialization: string): Observable<MedicoResponseContract[]> {
    return this.http.get<MedicoResponseContract[]>(`${this.apiUrl}/pesquisar/especializacao?specialization=${specialization}`);
  }

  getAllBySpecializationAndHospitalId(specialization: string, hospitalId: number): Observable<MedicoResponseContract[]> {
    return this.http.get<MedicoResponseContract[]>(`${this.apiUrl}/pesquisar/especializacao-e-hospital?specialization=${specialization}&id=${hospitalId}`);
  }

  getById(id: number): Observable<MedicoResponseContract> {
    return this.http.get<MedicoResponseContract>(`${this.apiUrl}/${id}`);
  }

  update(id: number, medico: MedicoRequestContract): Observable<MedicoResponseContract> {
    return this.http.put<MedicoResponseContract>(`${this.apiUrl}/${id}`, medico);
  }
}
