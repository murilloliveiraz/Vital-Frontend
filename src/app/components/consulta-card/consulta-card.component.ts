import { Component, Input } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { DownloadService } from 'src/app/services/Download.service';

@Component({
  selector: 'app-consulta-card',
  templateUrl: './consulta-card.component.html',
  styleUrls: ['./consulta-card.component.css']
})
export class ConsultaCardComponent {
  @Input() consulta: Consulta;
  @Input() tela: string = '';

  constructor(private downloadService: DownloadService) {}

  downloadAllDocuments(consulta: Consulta) {
    consulta.documentos.forEach(documento => {
      const fileName = documento.downloadURL.split('/').pop() || 'documento';
      this.downloadService.downloadFile(documento.downloadURL, fileName);
    });
  }
}
