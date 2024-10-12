import { Component, Input } from '@angular/core';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'app-ultimos-pacientes-card',
  templateUrl: './ultimos-pacientes-card.component.html',
  styleUrls: ['./ultimos-pacientes-card.component.css']
})
export class UltimosPacientesCardComponent {
  @Input() ultimosPacientes: Exame[] = [];
}
