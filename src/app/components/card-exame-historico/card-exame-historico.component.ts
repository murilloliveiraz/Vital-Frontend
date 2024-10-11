import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-exame-historico',
  templateUrl: './card-exame-historico.component.html',
  styleUrls: ['./card-exame-historico.component.css']
})
export class CardExameHistoricoComponent {
  @Input() local: string = '';
  @Input() data: string = '';
  @Input() titulo: string = '';
}
