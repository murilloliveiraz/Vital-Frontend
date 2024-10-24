import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-admin-agendar-exame',
  templateUrl: './admin-agendar-exame.component.html',
  styleUrls: ['./admin-agendar-exame.component.css']
})
export class AdminAgendarExameComponent {
  agendando: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  exames: Exame[] = [
    new Exame(
      1,
      'Exame de Sangue',
      'Concluído',
      'Laboratório A',
      new Date('2024-10-09').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        new Date('04/11,2005'),
      ),
      'caminho/para/o/s3',
      'Dor no peito',
      'Jjeum de 8 horas',
      '/assets/images/resultado1.jfif'
    ),
    new Exame(
      2,
      'Exame de Urina',
      'Pendente',
      'Laboratório B',
      new Date('2024-10-08').toLocaleDateString('pt-BR'),
      new Paciente(
        1,
        "João Pedro",
        "Masculino",
        new Date('02/16,2005'),
      ),
      'caminho/para/o/s3',
      'Dor no membro',
      'Jejum de 8 horas',
      '/assets/images/resultado2.jfif'
    ),
    new Exame(
      3,
      'Raio-X',
      'Concluído',
      'Laboratório C',
      new Date('2024-10-07').toLocaleDateString('pt-BR'),
      new Paciente(
        2,
        "Mariana Garcia",
        "Feminino",
        new Date('24/12,2000'),
      ),
      'caminho/para/o/s3',
      'Muita dor no braço',
      'Nenhum pré preparo',
      '/assets/images/resultado3.jfif'
    ),
  ];

  voltar() {
    if (this.agendando) {
      this.agendando = !this.agendando; 
    } else {
      this.location.back();
    }
  }
}
