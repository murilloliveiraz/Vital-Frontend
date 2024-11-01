import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-admin-historico-agendamentos',
  templateUrl: './admin-historico-agendamentos.component.html',
  styleUrls: ['./admin-historico-agendamentos.component.css']
})
export class AdminHistoricoAgendamentosComponent {
  proximosExames: AgendarExameResponse[] = [];
  proximasConsultas: AgendarExameResponse[] = [];

  constructor(private location: Location) {}
}
