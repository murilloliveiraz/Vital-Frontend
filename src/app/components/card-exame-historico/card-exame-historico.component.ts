import { Component, Input } from '@angular/core';
import { Exame } from 'src/app/interfaces/Exame';

@Component({
  selector: 'app-card-exame-historico',
  templateUrl: './card-exame-historico.component.html',
  styleUrls: ['./card-exame-historico.component.css']
})
export class CardExameHistoricoComponent {
  @Input() exame: Exame;
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
