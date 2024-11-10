import { Component, Input } from '@angular/core';
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

  downloadAllDocuments(exame: any) {
    if (exame.arquivoResultadoUrl) {
      setTimeout(() => {
        window.open(exame.arquivoResultadoUrl, '_blank');
      }, 500); // 500 ms de atraso entre cada abertura
    }
    if (exame.urlResultadoClinicaExterna) {
      setTimeout(() => {
        window.open(exame.urlResultadoClinicaExterna, '_blank');
      }, 1000); // 1000 ms de atraso entre cada abertura
    }
  }

}
