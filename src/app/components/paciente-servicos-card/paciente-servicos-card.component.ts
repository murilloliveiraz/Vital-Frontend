import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paciente-servicos-card',
  templateUrl: './paciente-servicos-card.component.html',
  styleUrls: ['./paciente-servicos-card.component.css']
})
export class PacienteServicosCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
}
