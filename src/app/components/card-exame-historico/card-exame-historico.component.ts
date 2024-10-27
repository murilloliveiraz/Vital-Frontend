import { Component, Input } from '@angular/core';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'app-card-exame-historico',
  templateUrl: './card-exame-historico.component.html',
  styleUrls: ['./card-exame-historico.component.css']
})
export class CardExameHistoricoComponent {
  @Input() exame: Exame;
  @Input() tela: string = '';
}
