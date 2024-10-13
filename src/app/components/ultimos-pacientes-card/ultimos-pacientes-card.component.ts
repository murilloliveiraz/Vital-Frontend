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

  constructor(private router: Router) {}

  acessarConsulta(exameId: number) {
    this.router.navigate(['medico/consulta-detalhes', exameId]);
  }
}
