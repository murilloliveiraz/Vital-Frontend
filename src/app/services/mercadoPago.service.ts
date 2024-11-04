import { Injectable } from '@angular/core';
import { loadMercadoPago } from '@mercadopago/sdk-js';
import { environment } from 'src/environment';

declare global {
  interface Window {
    MercadoPago: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  private mp: any;

  constructor() {}

  async initialize() {
    await loadMercadoPago();
    this.mp = new window.MercadoPago(environment.mercadoPagoAPIKey);
  }

  getMercadoPagoInstance() {
    return this.mp;
  }
}
