import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medico-card',
  templateUrl: './medico-card.component.html',
  styleUrls: ['./medico-card.component.css']
})
export class MedicoCardComponent {
  @Input() nome: string = '';
  @Input() especialidade: string = '';
  @Input() crm: string = '';
  @Input() cpf: string = '';
  @Input() email: string = '';
  @Input() ativo: boolean = true;
  @Input() isADM: boolean = false;
}
