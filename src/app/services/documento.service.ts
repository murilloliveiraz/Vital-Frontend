import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  private baseUrl = `${environment.endPoint}/documentos`

  constructor(private http: HttpClient) {}

  anexarArquivo(id: number, file: File): Observable<Documento> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<Documento>(`${this.baseUrl}/${id}/anexar-arquivo`, formData);
  }
}
