import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExamesService } from 'src/app/services/exames.service';
import { MedicoService } from 'src/app/services/medico.service';
import { MedicoResponseContract } from './../../models/medico/medicoResponseContract';
import { AuthService } from 'src/app/services/auth.service';
import { forkJoin, of, switchMap } from 'rxjs';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-medico-homepage',
  templateUrl: './medico-homepage.component.html',
  styleUrls: ['./medico-homepage.component.css']
})
export class MedicoHomepageComponent {
  constructor(
    private examesService: ExamesService,
    private consultaService: ConsultaService,
    private medicoService: MedicoService,
    private authService: AuthService,
    private router: Router
  ) {}

  proximosExames: AgendarExameResponse[] = [];
  proximasConsultas: AgendarExameResponse[] = [];
  medico: MedicoResponseContract;
  agendamentos: Agendamento[] = []

  ngOnInit() {
    this.carregarEmailUsuarioLogado();
  }

  private carregarEmailUsuarioLogado() {
    const emailUserLogado = this.authService.getEmailUser();
    if (emailUserLogado) {
      this.carregarMedicoPorEmail(emailUserLogado);
    }
  }

  private carregarMedicoPorEmail(email: string) {
    this.medicoService.getByEmail(email).pipe(
      switchMap((medico: MedicoResponseContract) => {
        this.medico = medico;

        if (medico) {
          return forkJoin({
            exames: this.carregarExamesAgendados(medico.id),
            consultas: this.carregarConsultasAgendadas(medico.id)
          });
        }

        return of({ exames: [], consultas: [] });
      })
    ).subscribe({
      next: ({ exames, consultas }) => {
        this.proximosExames = exames;
        this.proximasConsultas = consultas;
        this.mixAndSortAgendamentos();
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }

  private carregarExamesAgendados(medicoId: number) {
    return this.examesService.obterExamesAgendadosPorMedico(medicoId);
  }

  private carregarConsultasAgendadas(medicoId: number) {
    return this.consultaService.getConsultasAgendadasPorMedico(medicoId);
  }

  private mixAndSortAgendamentos() {
    const exames: Agendamento[] = this.proximosExames.map(exame => ({
      id: exame.id,
      nome: exame.nome,
      pacienteNome: exame.pacienteNome,
      pacienteCPF: exame.pacienteCPF,
      local: exame.local,
      data: exame.data,
      tipo: 'exame',
      pacienteId: exame.pacienteId
    }));

    const consultas: Agendamento[] = this.proximasConsultas.map(consulta => ({
      id: consulta.id,
      nome: consulta.nome,
      pacienteNome: consulta.pacienteNome,
      pacienteCPF: consulta.pacienteCPF,
      local: consulta.local,
      data: consulta.data,
      tipo: 'consulta',
      pacienteId: consulta.pacienteId
    }));


    this.agendamentos = [...exames, ...consultas];

    this.agendamentos.sort((a, b) => +new Date(a.data) - +new Date(b.data));
  }

  logout(){
    this.authService.limparDadosUsuario();
    this.authService.limparToken();
    this.router.navigate(['/login']);
  }
}
