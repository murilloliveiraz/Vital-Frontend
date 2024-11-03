import { Component, Input } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from './../../models/exame/ExameConcluidoResponse';

@Component({
  selector: 'app-card-exame-historico',
  templateUrl: './card-exame-historico.component.html',
  styleUrls: ['./card-exame-historico.component.css']
})
export class CardExameHistoricoComponent {
  @Input() exame: AgendarExameResponse | ExameConcluidoResponse;
  @Input() tela: string = '';
}
