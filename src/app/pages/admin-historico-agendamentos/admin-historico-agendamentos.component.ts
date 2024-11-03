import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { ExamesService } from './../../services/exames.service';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
@Component({
  selector: 'app-admin-historico-agendamentos',
  templateUrl: './admin-historico-agendamentos.component.html',
  styleUrls: ['./admin-historico-agendamentos.component.css']
})
export class AdminHistoricoAgendamentosComponent {
  proximosExames: AgendarExameResponse[] = [];
  proximasConsultas: AgendarExameResponse[] = [];
  agendamentos: Agendamento[] = [];

  constructor(private location: Location, private examesService: ExamesService) {}

  ngOnInit(): void {
    this.obterExamesAgendados();
  }

  private obterExamesAgendados() {
    this.examesService.obterExamesAgendados().subscribe((data: AgendarExameResponse[]) => {
      this.proximosExames = data;
      this.mixAndSortAgendamentos();
    });
  }

  private mixAndSortAgendamentos() {
    const exames: Agendamento[] = this.proximosExames.map(exame => ({
      id: exame.id,
      nome: exame.nome,
      pacienteNome: exame.pacienteNome,
      local: exame.local,
      data: exame.data,
      tipo: 'exame',
      pacienteId: exame.pacienteId
    }));

    const consultas: Agendamento[] = this.proximasConsultas.map(consulta => ({
      id: consulta.id,
      nome: consulta.nome,
      pacienteNome: consulta.pacienteNome,
      local: consulta.local,
      data: consulta.data,
      tipo: 'consulta',
      pacienteId: consulta.pacienteId
    }));


    this.agendamentos = [...exames, ...consultas];

    this.agendamentos.sort((a, b) => +new Date(a.data) - +new Date(b.data));
  }
}
