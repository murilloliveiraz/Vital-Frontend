import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Splide from '@splidejs/splide';
import { Exame } from 'src/app/models/exame';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { Paciente } from 'src/app/models/paciente';
import { ExamesService } from 'src/app/services/exames.service';

@Component({
  selector: 'app-medico-homepage',
  templateUrl: './medico-homepage.component.html',
  styleUrls: ['./medico-homepage.component.css']
})
export class MedicoHomepageComponent {
  constructor(private route: ActivatedRoute, private location: Location, private examesService: ExamesService) {}
  proximosExames: AgendarExameResponse[] = [];

  ngOnInit() {
    this.examesService.obterExamesAgendadosPorMedico(1).subscribe({
      next: (data: AgendarExameResponse[]) => {
        this.proximosExames = data;
      },
      error: (error) => {
        console.error('Erro ao buscar exames:', error);
      }
    });
  }

}
