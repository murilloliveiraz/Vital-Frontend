import { Component, Input } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { DownloadService } from 'src/app/services/Download.service';
import { ConsultaConcluidaResponseContract } from './../../models/consulta/consultaConcluidaResponseContract';
import { MedicoResponseContract } from './../../models/medico/medicoResponseContract';

@Component({
  selector: 'app-consulta-card',
  templateUrl: './consulta-card.component.html',
  styleUrls: ['./consulta-card.component.css']
})
export class ConsultaCardComponent {
  @Input() consulta: AgendarConsultaResponseContract | ConsultaConcluidaResponseContract;
  @Input() tela: string = '';
  medico: MedicoResponseContract;

  constructor(private downloadService: DownloadService) {}

  downloadAllDocuments(consulta: AgendarConsultaResponseContract | ConsultaConcluidaResponseContract) {
    consulta.documentos.forEach(documento => {
      const fileName = documento.downloadURL.split('/').pop() || 'documento';
      this.downloadService.downloadFile(documento.downloadURL, fileName);
    });
  }
}
