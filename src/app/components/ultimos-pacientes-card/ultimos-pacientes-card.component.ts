import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'app-ultimos-pacientes-card',
  templateUrl: './ultimos-pacientes-card.component.html',
  styleUrls: ['./ultimos-pacientes-card.component.css']
})
export class UltimosPacientesCardComponent {
  @Input() ultimosPacientes: Exame[] = [];
  @Input() tela: string = '';

  constructor(private router: Router) {}

  redirecionar(item: Exame) {
    if (this.tela === 'home') {
      this.acessarConsulta(item.exameId);
    } else if (this.tela === 'historico') {
      this.acessarPaciente(item.paciente.id);
    }
  }

  acessarConsulta(exameId: number) {
    this.router.navigate(['medico/consulta-detalhes', exameId]);
  }

  acessarPaciente(pacienteId: number) {
    this.router.navigate(['medico/detalhes-paciente', pacienteId]);
  }
}
