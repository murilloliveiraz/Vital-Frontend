import { PacienteResponseContract } from './../../models/paciente/pacienteResponseContract';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Exame } from 'src/app/models/exame';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { PacienteService } from './../../services/paciente.service';

@Component({
  selector: 'app-ultimos-pacientes-card',
  templateUrl: './ultimos-pacientes-card.component.html',
  styleUrls: ['./ultimos-pacientes-card.component.css']
})
export class UltimosPacientesCardComponent {
  @Input() ultimosPacientes: PacienteResponseContract[] = [];
  @Input() proximosExames: AgendarExameResponse[] = [];
  @Input() tela: string = '';
  pacientes: PacienteResponseContract[] = [];

  constructor(private router: Router, private pacienteService: PacienteService) {}

  redirecionarParaConsulta(exame: AgendarExameResponse) {
    this.acessarConsulta(exame.exameId);
  }

  redirecionarParaPaciente(paciente: PacienteResponseContract) {
    if(this.tela == "historico"){
      this.acessarPaciente(paciente.id);
    } else {
      this.acessarPacienteAdmin(paciente.id)
    }
  }

  acessarConsulta(exameId: number) {
    this.router.navigate(['medico/consulta-detalhes', exameId]);
  }

  acessarPacienteAdmin(pacienteId: number) {
    this.router.navigate(['admin/historico/agendamentos-paciente', pacienteId]);
  }

  acessarPaciente(pacienteId: number) {
    this.router.navigate(['medico/detalhes-paciente', pacienteId]);
  }
}
