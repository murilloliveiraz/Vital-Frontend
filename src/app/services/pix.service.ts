import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { PixPayment } from '../models/pagamentos/PixPayment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixService {
  private readonly apiUrl = `${environment.endPoint}/pix`;

  constructor(private http: HttpClient) {}

  createPayment(model: PixPayment): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(`${this.apiUrl}`, model);
  }
}
