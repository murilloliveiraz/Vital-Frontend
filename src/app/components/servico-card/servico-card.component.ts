import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servico-card',
  templateUrl: './servico-card.component.html',
  styleUrls: ['./servico-card.component.css']
})
export class ServicoCardComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
}
