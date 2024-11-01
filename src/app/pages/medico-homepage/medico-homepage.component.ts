import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExamesService } from 'src/app/services/exames.service';
import { MedicoService } from 'src/app/services/medico.service';
import { MedicoResponseContract } from './../../models/medico/medicoResponseContract';
import { AuthService } from 'src/app/services/auth.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-medico-homepage',
  templateUrl: './medico-homepage.component.html',
  styleUrls: ['./medico-homepage.component.css']
})
export class MedicoHomepageComponent {
  constructor(private route: ActivatedRoute, private location: Location, private examesService: ExamesService, private medicoService: MedicoService, private authService: AuthService) {}
  proximosExames: AgendarExameResponse[] = [];
  medico: MedicoResponseContract;

  ngOnInit() {
    const emailUserLogado = this.authService.getEmailUser();
    if (emailUserLogado) {
      this.medicoService.getByEmail(emailUserLogado).pipe(
        switchMap((medico: MedicoResponseContract) => {
          this.medico = medico;
          return medico ? this.examesService.obterExamesAgendadosPorMedico(medico.id) : of([]);
        })
      ).subscribe({
        next: (exames: AgendarExameResponse[]) => {
          this.proximosExames = exames;
        },
        error: (error) => {
          console.error('Erro ao carregar dados:', error);
        }
      });
    }
  }
}
