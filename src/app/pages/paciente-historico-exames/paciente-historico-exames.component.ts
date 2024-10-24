import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente-historico-exames',
  templateUrl: './paciente-historico-exames.component.html',
  styleUrls: ['./paciente-historico-exames.component.css']
})
export class PacienteHistoricoExamesComponent {
  selectedButton: string | null = "anteriores";

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
