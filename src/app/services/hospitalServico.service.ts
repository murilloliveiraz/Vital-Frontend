import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { HospitalResponseContract } from '../models/hospital/hospitalResponseContract';
import { ServicoResponseContract } from '../models/servico/servicoResponseContract';
import { AdicionarServicoAoHospital } from '../models/hospital-servico/AdicionarServicoAoHospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalServicoService {
  private apiUrl = `${environment.endPoint}/hospital-servicos`;

  constructor(private http: HttpClient) { }

  getAllByHospitalId(id: number): Observable<ServicoResponseContract[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ServicoResponseContract[]>(url);
  }

  getByHospitalIdAndServicoId(hospitalId: number, servicoId: number): Observable<ServicoResponseContract> {
    const url = `${this.apiUrl}/${hospitalId}/${servicoId}`;
    return this.http.get<ServicoResponseContract>(url);
  }

  GetAllHospitalsThatOfferAnSpecificService(servicoId: number): Observable<HospitalResponseContract[]> {
    const url = `${this.apiUrl}/hospitais-por-servico/${servicoId}`;
    return this.http.get<HospitalResponseContract[]>(url);
  }

  post(hospitalServico: AdicionarServicoAoHospital): Observable<any> {
    return this.http.post<any>(this.apiUrl, hospitalServico);
  }

  delete(hospitalId: number, servicoId: number): Observable<void> {
    const url = `${this.apiUrl}/${hospitalId}/${servicoId}`;
    return this.http.delete<void>(url);
  }
}
