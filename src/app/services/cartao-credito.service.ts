import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { CreditCardPayment } from '../models/pagamentos/CreditCardPayment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaoCreditoService {
  private readonly apiUrl = `${environment.endPoint}/cartao-credito`;

  constructor(private http: HttpClient) {}

  createPayment(model: CreditCardPayment): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, model);
  }
}
