import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExamesService } from './../../services/exames.service';
import { of, switchMap } from 'rxjs';
import { PacienteService } from 'src/app/services/paciente.service';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import Swal from 'sweetalert2';

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
              { inputType: 'input', controlName: "exame",  label: 'Exame', type: 'text', value: this.exame.nome || '', placeholder: 'nome do exame', disabled: true },
              { inputType: 'input', controlName: "local", label: 'Local', type: 'text', value: this.exame.local || '', placeholder: 'hospital', disabled: true },
              { inputType: 'textarea', controlName: "queixa", label: 'Queixa do paciente', type: 'text', value: this.exame.queixasDoPaciente || '', placeholder: 'queixa', disabled: true },
              { inputType: 'textarea', controlName: "observações", label: 'Observações pré-exame', type: 'text', value: this.exame.observacoesDaClinica || '', placeholder: 'Observações da clínica', disabled: true }
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
    this.router.navigate(['medico/exame-detalhes', this.exame.id.toString(), 'inserir-registro', this.exame.pacienteId.toString()]);
  }

  concluirExame(){
    this.examesService.concluirExame(this.exame.id).subscribe(() => {
      Swal.fire({
        title: "Exame Concluído!",
        text: "O status do exame foi alterado para: Concluido.",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
    });
  }


  voltar() {
    this.location.back();
  }
}
