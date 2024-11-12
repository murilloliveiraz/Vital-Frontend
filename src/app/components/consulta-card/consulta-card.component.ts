import { Component, Input } from '@angular/core';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { DownloadService } from 'src/app/services/Download.service';
import { ConsultaConcluidaResponseContract } from './../../models/consulta/consultaConcluidaResponseContract';
import { MedicoResponseContract } from './../../models/medico/medicoResponseContract';
import { Consulta } from 'src/app/interfaces/Consulta';

@Component({
  selector: 'app-consulta-card',
  templateUrl: './consulta-card.component.html',
  styleUrls: ['./consulta-card.component.css']
})
export class ConsultaCardComponent {
  @Input() consulta: Consulta;
  @Input() tela: string = '';
  medico: MedicoResponseContract;

  constructor(private downloadService: DownloadService) {}

  downloadAllDocuments(consulta: Consulta) {
    consulta.documentos.forEach((documento, index) => {
      console.log(documento)
      if (documento.arquivoResultadoUrl) {
        setTimeout(() => {
          window.open(documento.arquivoResultadoUrl, '_blank');
        }, index * 500); // 500 ms de atraso entre cada abertura
      }
    });
  }
}
