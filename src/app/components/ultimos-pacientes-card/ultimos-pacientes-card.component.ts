import { PacienteResponseContract } from './../../models/paciente/pacienteResponseContract';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from './../../services/paciente.service';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';

@Component({
  selector: 'app-ultimos-pacientes-card',
  templateUrl: './ultimos-pacientes-card.component.html',
  styleUrls: ['./ultimos-pacientes-card.component.css']
})
export class UltimosPacientesCardComponent {
  @Input() ultimosPacientes: PacienteResponseContract[] = [];
  @Input() agendamentos: Agendamento[] = [];
  @Input() proximosExames: AgendarExameResponse[] = [];
  @Input() tela: string = '';
  pacientes: PacienteResponseContract[] = [];

  constructor(private router: Router, private pacienteService: PacienteService) {}

  redirecionarParaConsulta(agendamento: Agendamento) {
    if ('tipo' in agendamento) {
      if (agendamento.tipo === 'exame') {
          this.acessarExame(agendamento.id);
      } else {
          this.acessarConsulta(agendamento.id);
      }
    } else {
        console.error('Agendamento inválido: tipo não encontrado');
    }
  }

  acessarConsulta(consultaId: number) {
    this.router.navigate(['medico/consulta-detalhes', consultaId]);
  }

  acessarExame(exameId: number) {
    this.router.navigate(['medico/exame-detalhes', exameId]);
  }

  acessarPacienteAdmin(pacienteId: number) {
    this.router.navigate(['admin/detalhes-paciente', pacienteId]);
  }

  acessarPaciente(pacienteId: number) {
    this.router.navigate(['medico/detalhes-paciente', pacienteId]);
  }
}
