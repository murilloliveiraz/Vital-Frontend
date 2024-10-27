import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-anexar-documento',
  templateUrl: './admin-anexar-documento.component.html',
  styleUrls: ['./admin-anexar-documento.component.css']
})
export class AdminAnexarDocumentoComponent {
  agendamento: string;
  tipoAgendamento: string;
  selectedFileName: string | null = null;
  selectedType: string = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

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
    } else {
      this.selectedFileName = null;
    }
  }

  selectType(type: string) {
    this.selectedType = type;
  }

  voltar() {
    this.location.back();
  }

  anexarNoAgendamento() {
    Swal.fire({
        title: "O documento foi anexado ao agendamento",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
    }
}
