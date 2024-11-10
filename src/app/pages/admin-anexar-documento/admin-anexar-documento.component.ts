import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ExamesService } from './../../services/exames.service';
import { ExameConcluidoResponse } from './../../models/exame/ExameConcluidoResponse';
import { DocumentoService } from './../../services/documento.service';
import { Documento } from 'src/app/models/documento';

@Component({
  selector: 'app-admin-anexar-documento',
  templateUrl: './admin-anexar-documento.component.html',
  styleUrls: ['./admin-anexar-documento.component.css']
})
export class AdminAnexarDocumentoComponent {
  agendamento: string;
  tipoAgendamento: string;
  selectedFileName: string | null = null;
  selectedFile: File;
  selectedType: string = null;
  fileErrors: boolean = false;
  urlexterna: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private examesService: ExamesService, private documentoService: DocumentoService) {}

  ngOnInit() {
    const tipoAgendamento = this.route.snapshot.paramMap.get('tipo');
    const agendamento = this.route.snapshot.paramMap.get('id');
    if (tipoAgendamento && agendamento) {
      this.agendamento = agendamento;
      this.tipoAgendamento = tipoAgendamento;
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
      this.selectedFile = input.files[0];
      this.fileErrors = false;
    } else {
      this.selectedFileName = null;
      this.fileErrors = true;
    }
  }

  saveURL(event: any) {
    this.urlexterna = event.target.value;
    console.log(this.urlexterna);
}

  selectType(type: string) {
    this.selectedType = type;
  }

  voltar() {
    this.location.back();
  }

  anexarNoAgendamento() {
    if(this.urlexterna && this.tipoAgendamento == "exame"){
      this.examesService.adicionarResultadoUrlExterna(Number(this.agendamento), this.urlexterna).subscribe({
        next: (exame: ExameConcluidoResponse) => {
          Swal.fire({
            title: "A URL foi anexada ao exame",
            imageUrl: "/assets/images/joiaconcluido.png",
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: "Registro inserido icone",
            confirmButtonColor: "#0099B9",
            confirmButtonText: "Concluído",
          });
        },
        error: (error) => {
          alert('falha ao anexar!'),
          this.fileErrors = true;
        }
      });
    }
    if (this.selectedFile && this.tipoAgendamento == "exame") {
      this.examesService.anexarResultado(Number(this.agendamento), this.selectedFile).subscribe({
        next: (exame: ExameConcluidoResponse) => {
          Swal.fire({
            title: "O documento foi anexado ao exame",
            imageUrl: "/assets/images/joiaconcluido.png",
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: "Registro inserido icone",
            confirmButtonColor: "#0099B9",
            confirmButtonText: "Concluído",
          });
        },
        error: (error) => {
          alert('falha ao anexar!'),
          this.fileErrors = true;
        }
      });
    } else if (this.selectedFile && this.tipoAgendamento == "consulta"){
      this.documentoService.anexarArquivo(Number(this.agendamento), this.selectedFile).subscribe({
        next: (exame: Documento) => {
          Swal.fire({
            title: "O documento foi anexado a consulta",
            imageUrl: "/assets/images/joiaconcluido.png",
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: "Registro inserido icone",
            confirmButtonColor: "#0099B9",
            confirmButtonText: "Concluído",
          });
        },
        error: (error) => {
          alert('falha ao anexar!'),
          this.fileErrors = true;
        }
      });
    }
    this.router.navigate(['/admin']);
  }
}
