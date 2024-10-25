import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.css']
})
export class PacienteCardComponent {
  @Input() pacientes: Paciente[] = [];

  constructor(private router: Router) {}

  redirecionar(paciente: Paciente) {
      this.acessarConsultaAdmin(paciente.id)
  }

  acessarConsultaAdmin(pacienteId: number) {
    this.router.navigate(['admin/detalhes-paciente', pacienteId]);
  }
}
