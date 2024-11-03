import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { Documento } from 'src/app/models/documento';
import { Exame } from 'src/app/models/exame';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { Paciente } from 'src/app/models/paciente';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaConcluidaResponseContract } from 'src/app/models/consulta/consultaConcluidaResponseContract';

@Component({
  selector: 'app-admin-paciente-agendamentos',
  templateUrl: './admin-paciente-agendamentos.component.html',
  styleUrls: ['./admin-paciente-agendamentos.component.css']
})
export class AdminPacienteAgendamentosComponent {
  selectedType: string = "exames";
  selectedButton: string = "anteriores";
  paciente: Paciente;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('pacienteId');
    if (pacienteId) {
      this.paciente = this.pacientes.find(paciente => paciente.id.toString() === pacienteId);
    }
  }

  pacientes: Paciente[] = [
    new Paciente(
      0,
      "Luana Camila",
      "Feminino",
      "11256879123",
      new Date('04/11/2005'),
    ),
    new Paciente(
      1,
      "João Pedro",
      "Masculino",
      "12316547897",
      new Date('02/16/2005'),
    ),
    new Paciente(
      2,
      "Mariana Garcia",
      "Feminino",
      "127845645645",
      new Date('12/24/2000'),
    ),
  ];

  examesConcluidos: ExameConcluidoResponse[] = [];

  examesAgendados: AgendarExameResponse[] = [];

  consultasConcluidas: ConsultaConcluidaResponseContract[] = [];

  consultasAgendadas: AgendarConsultaResponseContract[] = [];

  voltar() {
    this.location.back();
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
