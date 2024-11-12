import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Consulta } from 'src/app/interfaces/Consulta';
import { Exame } from 'src/app/interfaces/Exame';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaConcluidaResponseContract } from 'src/app/models/consulta/consultaConcluidaResponseContract';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ExamesService } from 'src/app/services/exames.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-historico-agendamentos',
  templateUrl: './paciente-historico-agendamentos.component.html',
  styleUrls: ['./paciente-historico-agendamentos.component.css']
})
export class PacienteHistoricoAgendamentosComponent {
  selectedType: string = "exames";
  @Input() tela: string = "";
  @Input() pacienteId: number;
  examesConcluidos: ExameConcluidoResponse[] = [];
  examesAgendados: AgendarExameResponse[] = [];
  consultasConcluidas: ConsultaConcluidaResponseContract[] = [];
  consultasAgendadas: AgendarConsultaResponseContract[] = [];
  exames: Exame[] = []
  consultas: Consulta[] = []

  constructor(
    public pacienteService: PacienteService,
    public consultasService: ConsultaService,
    public examesService: ExamesService,
    public router: Router) {}

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['pacienteId'] && this.pacienteId) {
        this.carregarDados();
      }
    }

    private carregarDados(): void {
      forkJoin({
        examesAgendados: this.examesService.obterExamesAgendadosPorPaciente(this.pacienteId),
        examesConcluidos: this.examesService.obterExamesConcluidosPorPaciente(this.pacienteId),
        consultasAgendadas: this.consultasService.getConsultasAgendadasPorPaciente(this.pacienteId),
        consultasConcluidas: this.consultasService.getConsultasConcluidasPorPaciente(this.pacienteId),
      }).subscribe({
        next: ({ examesAgendados, examesConcluidos, consultasAgendadas, consultasConcluidas }) => {
          this.examesAgendados = examesAgendados;
          this.examesConcluidos = examesConcluidos;
          this.consultasAgendadas = consultasAgendadas;
          this.consultasConcluidas = consultasConcluidas;

          this.mixAndSortExames();
          this.mixAndSortConsultas();

          console.log('Exames:', this.exames);
          console.log('Consultas:', this.consultas);
        },
        error: (err) => {
          console.error('Erro ao carregar dados:', err);
        }
      });
    }

  buscarExamesAgendados(id: number){
    this.examesService.obterExamesAgendadosPorPaciente(id).subscribe((data: AgendarExameResponse[]) => {
      this.examesAgendados = data;
    });
  }

  buscarExamesConcluidos(id: number){
    this.examesService.obterExamesConcluidosPorPaciente(id).subscribe((data: ExameConcluidoResponse[]) => {
      this.examesConcluidos = data;
    });
  }

  buscarConsultasAgendados(id: number){
    this.consultasService.getConsultasAgendadasPorPaciente(id).subscribe((data: AgendarConsultaResponseContract[]) => {
      this.consultasAgendadas = data;
      console.log(data)
    });
  }

  buscarConsultasConcluidos(id: number){
    this.consultasService.getConsultasConcluidasPorPaciente(id).subscribe((data: ConsultaConcluidaResponseContract[]) => {
      this.consultasConcluidas = data;
      console.log(data)
    });
  }

  private mixAndSortExames() {
    const examesConcluidos: Exame[] = this.examesConcluidos.map(exame => ({
      id: exame.id,
      nome: exame.nome,
      local: exame.local,
      data: exame.data,
      arquivoResultadoUrl: exame.arquivoResultadoUrl,
      status: exame.status,
      tipo: "exame",
      urlResultadoClinicaExterna: exame.urlResultadoClinicaExterna
    }));

    const examesAgendados: Exame[] = this.examesAgendados.map(exame => ({
      id: exame.id,
      nome: exame.nome,
      local: exame.local,
      data: exame.data,
      arquivoResultadoUrl: "",
      status: exame.status,
      tipo: "exame",
      urlResultadoClinicaExterna: ""
    }));


    this.exames = [...examesAgendados, ...examesConcluidos];

    this.exames.sort((a, b) => {
      if (a.status === "Agendado" && b.status === "Concluido") return -1;
      if (a.status === "Concluido" && b.status === "Agendado") return 1;
      return +new Date(a.data) - +new Date(b.data);
    });
  }

  private mixAndSortConsultas() {
    const consultasConcluidas: Consulta[] = this.consultasConcluidas.map(consulta => ({
      id: consulta.id,
      nome: consulta.nome,
      local: consulta.local,
      data: consulta.data,
      status: consulta.status,
      tipo: "consulta",
      documentos: consulta.documentos,
      tipoConsulta: consulta.tipoConsulta,
      meetLink: consulta.meetLink
    }));

    const consultasAgendadas: Consulta[] = this.consultasAgendadas.map(consulta => ({
      id: consulta.id,
      nome: consulta.nome,
      local: consulta.local,
      data: consulta.data,
      status: consulta.status,
      tipo: "consulta",
      documentos: consulta.documentos,
      tipoConsulta: consulta.tipoConsulta,
      meetLink: consulta.meetLink
    }));


    this.consultas = [...consultasAgendadas, ...consultasConcluidas];

    this.consultas.sort((a, b) => {
      if (a.status === "Agendado" && b.status === "Concluido") return -1;
      if (a.status === "Concluido" && b.status === "Agendado") return 1;
      return +new Date(a.data) - +new Date(b.data);
    });
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
