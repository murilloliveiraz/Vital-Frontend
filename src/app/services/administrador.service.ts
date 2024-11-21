import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminRequestContract } from '../models/administrador/adminRequestContract';
import { AdminResponseContract } from '../models/administrador/adminResponseContract';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private apiUrl = `${environment.endPoint}/administradores`;

  constructor(private http: HttpClient) {}

  createAdmin(admin: AdminRequestContract): Observable<AdminResponseContract> {
    return this.http.post<AdminResponseContract>(this.apiUrl, admin);
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllAdmins(): Observable<AdminResponseContract[]> {
    return this.http.get<AdminResponseContract[]>(this.apiUrl);
  }

  getAdminById(id: number): Observable<AdminResponseContract> {
    return this.http.get<AdminResponseContract>(`${this.apiUrl}/${id}`);
  }

  getByEmail(email: string): Observable<AdminResponseContract> {
    return this.http.get<AdminResponseContract>(`${this.apiUrl}/pesquisar/email?email=${email}`);
  }

  updateAdmin(id: number, admin: AdminRequestContract): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, admin);
  }
}
