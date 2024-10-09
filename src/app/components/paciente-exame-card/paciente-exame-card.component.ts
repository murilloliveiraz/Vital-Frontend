import { Component, Input } from '@angular/core';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'app-paciente-exame-card',
  templateUrl: './paciente-exame-card.component.html',
  styleUrls: ['./paciente-exame-card.component.css']
})
export class PacienteExameCardComponent {
  @Input() exame: Exame;
}
