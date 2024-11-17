import { ConsultaService } from './../../services/consulta.service';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { ExamesService } from './../../services/exames.service';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
@Component({
  selector: 'app-admin-historico-agendamentos',
  templateUrl: './admin-historico-agendamentos.component.html',
  styleUrls: ['./admin-historico-agendamentos.component.css']
})
export class AdminHistoricoAgendamentosComponent {
  proximosExames: AgendarExameResponse[] = [];
  proximasConsultas: AgendarConsultaResponseContract[] = [];
  agendamentos: Agendamento[] = [];

  constructor(private location: Location, private examesService: ExamesService, private consultaService: ConsultaService) {}

  ngOnInit(): void {
    this.obterExamesAgendados();
    this.obterConsultasAgendadas();
  }

  private obterExamesAgendados() {
    this.examesService.obterExamesAgendados().subscribe((data: AgendarExameResponse[]) => {
      this.proximosExames = data;
      this.mixAndSortAgendamentos();
    });
  }

  private obterConsultasAgendadas() {
    this.consultaService.getConsultasAgendadas().subscribe((data: AgendarConsultaResponseContract[]) => {
      this.proximasConsultas = data;
      console.log(data)
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
      pacienteId: exame.pacienteId,
      statusPagamento: exame.statusPagamento
    }));

    const consultas: Agendamento[] = this.proximasConsultas.map(consulta => ({
      id: consulta.id,
      nome: consulta.nome,
      pacienteNome: consulta.pacienteNome,
      local: consulta.tipoConsulta,
      data: consulta.data,
      tipo: 'consulta',
      pacienteId: consulta.pacienteId,
      statusPagamento: consulta.statusPagamento
    }));

    this.agendamentos = [...exames, ...consultas];

    this.agendamentos.sort((a, b) => +new Date(a.data) - +new Date(b.data));
    console.log(this.agendamentos)
  }
}
