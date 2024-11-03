import { Component, Input } from '@angular/core';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaConcluidaResponseContract } from 'src/app/models/consulta/consultaConcluidaResponseContract';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';

@Component({
  selector: 'app-paciente-historico-agendamentos',
  templateUrl: './paciente-historico-agendamentos.component.html',
  styleUrls: ['./paciente-historico-agendamentos.component.css']
})
export class PacienteHistoricoAgendamentosComponent {
  selectedButton: string | null = "agendados";
  selectedType: string = "exames";
  @Input() tela: string = "";
  @Input() examesConcluidos: ExameConcluidoResponse[] = [];
  @Input() examesAgendados: AgendarExameResponse[] = [];
  @Input() consultasConcluidas: ConsultaConcluidaResponseContract[] = [];
  @Input() consultasAgendadas: AgendarConsultaResponseContract[] = [];

  selectButton(button: string) {
    this.selectedButton = button;
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
