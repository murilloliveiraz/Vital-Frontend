import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
export interface HospitalServicoRequestContract {
  hospitalId: number;
  servicoId: number;
}

@Injectable({
  providedIn: 'root'
})
export class HospitalServicoService {
  private apiUrl = `${environment.endPoint}/hospital-servicos`;

  constructor(private http: HttpClient) { }

  getAllByHospitalId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getByHospitalIdAndServicoId(hospitalId: number, servicoId: number): Observable<any> {
    const url = `${this.apiUrl}/${hospitalId}/${servicoId}`;
    return this.http.get<any>(url);
  }

  post(hospitalServico: HospitalServicoRequestContract): Observable<any> {
    return this.http.post<any>(this.apiUrl, hospitalServico);
  }

  delete(hospitalId: number, servicoId: number): Observable<void> {
    const url = `${this.apiUrl}/${hospitalId}/${servicoId}`;
    return this.http.delete<void>(url);
  }
}
