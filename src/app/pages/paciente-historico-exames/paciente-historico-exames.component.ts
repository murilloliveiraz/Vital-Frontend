import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-historico-exames',
  templateUrl: './paciente-historico-exames.component.html',
  styleUrls: ['./paciente-historico-exames.component.css']
})
export class PacienteHistoricoExamesComponent {
  selectedButton: string | null = "anteriores";

  examesConcluidos: ExameConcluidoResponse[] = [];

  examesAgendados: AgendarExameResponse[] = [];

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
