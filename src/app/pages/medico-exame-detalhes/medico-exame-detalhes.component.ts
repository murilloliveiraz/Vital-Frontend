import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExamesService } from './../../services/exames.service';
import { of, switchMap } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';

@Component({
  selector: 'app-medico-exame-detalhes',
  templateUrl: './medico-exame-detalhes.component.html',
  styleUrls: ['./medico-exame-detalhes.component.css']
})
export class MedicoExameDetalhesComponent {
  exame: AgendarExameResponse;
  paciente: PacienteResponseContract;
  formFields = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private examesService: ExamesService, private pacienteService: PacienteService) {}

  ngOnInit() {
    const exameIdParameter = this.route.snapshot.paramMap.get('id');

    if (exameIdParameter) {
      const exameId = Number(exameIdParameter)
      this.examesService.obterExamePorId(exameId).pipe(
        switchMap((exame: AgendarExameResponse) => {
          this.exame = exame;
          if (this.exame) {
            this.formFields = [
              { inputType: 'input', label: 'Exame', type: 'text', value: this.exame.nome || '', placeholder: 'nome do exame', disabled: true },
              { inputType: 'input', label: 'Local', type: 'text', value: this.exame.local || '', placeholder: 'hospital', disabled: true },
              { inputType: 'textarea', label: 'Queixa do paciente', type: 'text', value: this.exame.queixasDoPaciente || '', placeholder: 'queixa', disabled: true },
              { inputType: 'textarea', label: 'Observações pré-exame', type: 'text', value: this.exame.observacoesDaClinica || '', placeholder: 'Observações da clínica', disabled: true }
            ];
          }
          return exame ? this.pacienteService.getById(exame.pacienteId) : of();
        })
      ).subscribe({
        next: (paciente: PacienteResponseContract) => {
          this.paciente = paciente;
        },
        error: (error) => {
          console.error('Erro ao buscra exame dados:', error);
        }
      });
    }
  }

  inserirRegistro() {
    this.router.navigate(['medico/exame-detalhes', this.exame.exameId.toString(), 'inserir-registro', this.exame.pacienteId.toString()]);
  }


  voltar() {
    this.location.back();
  }
}
