import { Component } from '@angular/core';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaConcluidaResponseContract } from 'src/app/models/consulta/consultaConcluidaResponseContract';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { ExamesService } from 'src/app/services/exames.service';
import { AuthService } from './../../services/auth.service';
import { PacienteService } from './../../services/paciente.service';
import { Observable, of, switchMap } from 'rxjs';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { ConsultaService } from './../../services/consulta.service';

@Component({
  selector: 'app-paciente-historico-exames',
  templateUrl: './paciente-historico-exames.component.html',
  styleUrls: ['./paciente-historico-exames.component.css']
})
export class PacienteHistoricoExamesComponent {
  selectedButton: string | null = "anteriores";
  examesConcluidos: ExameConcluidoResponse[] = [];
  examesAgendados: AgendarExameResponse[] = [];
  consultasConcluidas: ConsultaConcluidaResponseContract[] = [];
  consultasAgendadas: AgendarConsultaResponseContract[] = [];
  paciente: PacienteResponseContract;

  constructor(public examesService: ExamesService, public authService: AuthService, public pacienteService: PacienteService, public consultaService: ConsultaService) {}

  ngOnInit() {
    this.carregarEmailUsuarioLogado();
  }

  private carregarEmailUsuarioLogado() {
    const emailUserLogado = this.authService.getEmailUser();
    if (emailUserLogado) {
      this.carregarPacientePorEmail(emailUserLogado);
    }
  }

  private carregarPacientePorEmail(email: string) {
    this.pacienteService.getByEmail(email).pipe(
      switchMap((paciente: PacienteResponseContract) => {
        this.paciente = paciente;
        return paciente ? this.buscarExamesAgendados(paciente.id) : of([]);
      }),
      switchMap((examesAgendados: AgendarExameResponse[]) => {
        this.examesAgendados = examesAgendados;
        return this.paciente ? this.buscarExamesConcluidos(this.paciente.id) : of([]);
      }),
      switchMap((examesConcluidos: ExameConcluidoResponse[]) => {
        this.examesConcluidos = examesConcluidos;
        return this.paciente ? this.buscarConsultasAgendadas(this.paciente.id) : of([]);
      }),
      switchMap((consultasAgendadas: AgendarConsultaResponseContract[]) => {
        this.consultasAgendadas = consultasAgendadas;
        return this.paciente ? this.buscarConsultasConcluidas(this.paciente.id) : of([]);
      })
    ).subscribe({
      next: (consultasConcluidas: ConsultaConcluidaResponseContract[]) => {
        this.consultasConcluidas = consultasConcluidas;
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }


  private buscarExamesAgendados(id: number): Observable<AgendarExameResponse[]> {
    return this.examesService.obterExamesAgendadosPorPaciente(id);
  }

  private buscarExamesConcluidos(id: number): Observable<ExameConcluidoResponse[]> {
    return this.examesService.obterExamesConcluidosPorPaciente(id);
  }

  private buscarConsultasAgendadas(id: number): Observable<AgendarConsultaResponseContract[]> {
    return this.consultaService.getConsultasAgendadasPorPaciente(id);
  }

  private buscarConsultasConcluidas(id: number): Observable<ConsultaConcluidaResponseContract[]> {
    return this.consultaService.getConsultasConcluidasPorPaciente(id);
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
