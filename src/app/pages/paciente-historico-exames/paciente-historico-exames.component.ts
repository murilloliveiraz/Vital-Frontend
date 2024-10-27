import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-historico-exames',
  templateUrl: './paciente-historico-exames.component.html',
  styleUrls: ['./paciente-historico-exames.component.css']
})
export class PacienteHistoricoExamesComponent {
  selectedButton: string | null = "anteriores";

  examesConcluidos: Exame[] = [
    new Exame(
      1,
      'Exame de Sangue',
      'Concluido',
      'Laboratório A',
      new Date('2024-10-09').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11/2005'),
      ),
      'caminho/para/o/s3',
      'Dor no peito',
      'Jejum de 8 horas',
      '/assets/images/resultado1.jfif'
    ),
    new Exame(
      3,
      'Raio-X',
      'Concluido',
      'Laboratório C',
      new Date('2024-10-07').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11/2005'),
      ),
      'caminho/para/o/s3',
      'Muita dor no braço',
      'Nenhum pré-preparo',
      '/assets/images/resultado3.jfif'
    ),
  ];

  examesAgendados: Exame[] = [
    new Exame(
      2,
      'Exame de Urina',
      'Agendado',
      'Laboratório B',
      new Date('2024-10-08').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11/2005'),
      ),
      'caminho/para/o/s3',
      'Dor no membro',
      'Jejum de 8 horas',
      null // Exame agendado, sem URL de resultado
    ),
  ];

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
