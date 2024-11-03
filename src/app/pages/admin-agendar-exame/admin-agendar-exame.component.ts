import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exame } from 'src/app/models/exame';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-admin-agendar-exame',
  templateUrl: './admin-agendar-exame.component.html',
  styleUrls: ['./admin-agendar-exame.component.css']
})
export class AdminAgendarExameComponent {
  agendando: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  exames: AgendarExameResponse[] = [];

  voltar() {
    if (this.agendando) {
      this.agendando = !this.agendando;
    } else {
      this.location.back();
    }
  }
}
