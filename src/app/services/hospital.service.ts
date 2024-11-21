import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HospitalRequestContract } from '../models/hospital/hospitalRequestContract';
import { Observable } from 'rxjs';
import { HospitalResponseContract } from '../models/hospital/hospitalResponseContract';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = `${environment.endPoint}/hospitais`;

  create(hospital: HospitalRequestContract): Observable<HospitalResponseContract> {
    return this.httpClient.post<HospitalResponseContract>(`${this.baseURL}`, hospital)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }

  getAll(): Observable<HospitalResponseContract[]> {
    return this.httpClient.get<HospitalResponseContract[]>(this.baseURL);
  }

  getById(id: number): Observable<HospitalResponseContract> {
    return this.httpClient.get<HospitalResponseContract>(`${this.baseURL}/${id}`);
  }

  getByName(nome: string): Observable<HospitalResponseContract> {
    return this.httpClient.get<HospitalResponseContract>(`${this.baseURL}/pesquisar/nome?name=${nome}`);
  }

  getAllByLocation(estado: string): Observable<HospitalResponseContract[]> {
    return this.httpClient.get<HospitalResponseContract[]>(`${this.baseURL}/pesquisar/estado?estado=${estado}`);
  }

  update(id: number, hospital: HospitalRequestContract): Observable<void> {
    return this.httpClient.put<void>(`${this.baseURL}/${id}`, hospital);
  }
}
