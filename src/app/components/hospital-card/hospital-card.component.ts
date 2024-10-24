import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hospital-card',
  templateUrl: './hospital-card.component.html',
  styleUrls: ['./hospital-card.component.css']
})
export class HospitalCardComponent {
  @Input() nome: string = '';
  @Input() endereco: string = '';
  @Input() telefone: string = '';
  @Input() estado: string = '';
}
