import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { Paciente } from 'src/app/models/paciente';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaConcluidaResponseContract } from 'src/app/models/consulta/consultaConcluidaResponseContract';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';

@Component({
  selector: 'app-admin-paciente-agendamentos',
  templateUrl: './admin-paciente-agendamentos.component.html',
  styleUrls: ['./admin-paciente-agendamentos.component.css']
})
export class AdminPacienteAgendamentosComponent {
  paciente: PacienteResponseContract;

  constructor(private route: ActivatedRoute, private location: Location) {}

  voltar() {
    this.location.back();
  }
}
