import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { Exame } from 'src/app/interfaces/Exame';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { Paciente } from 'src/app/models/paciente';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { ConsultaService } from 'src/app/services/consulta.service';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico-consulta-detalhes',
  templateUrl: './medico-consulta-detalhes.component.html',
  styleUrls: ['./medico-consulta-detalhes.component.css']
})
export class MedicoConsultaDetalhesComponent {
  consulta: AgendarConsultaResponseContract;
  paciente: PacienteResponseContract;
  formFields = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private consultaService: ConsultaService, private pacienteService: PacienteService) {}

  concluirExame(){
    this.consultaService.concluirConsulta(this.consulta.id).subscribe(() => {
      Swal.fire({
        title: "Consulta Concluída!",
        text: "O status da consulta foi alterado para: Concluido.",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
    });
  }

  ngOnInit() {
    const consultaIdParameter = this.route.snapshot.paramMap.get('id');
    if (consultaIdParameter) {
      const consultaId = Number(consultaIdParameter)
      this.consultaService.getConsultaById(consultaId).pipe(
        switchMap((consulta: AgendarConsultaResponseContract) => {
          this.consulta = consulta;
          if (this.consulta) {
            this.formFields = [
              { inputType: 'input', label: 'Exame', type: 'text', value: this.consulta.nome || '', placeholder: 'nome do exame', disabled: true },
              { inputType: 'input', label: 'Local', type: 'text', value: this.consulta.local || '', placeholder: 'hospital', disabled: true },
              { inputType: 'textarea', label: 'Queixa do paciente', type: 'text', value: this.consulta.queixasDoPaciente || '', placeholder: 'queixa', disabled: true }
            ];
          }
          return consulta ? this.pacienteService.getById(consulta.pacienteId) : of();
        })
      ).subscribe({
        next: (paciente: PacienteResponseContract) => {
          this.paciente = paciente;
        },
        error: (error) => {
          console.error('Erro ao buscar exame dados:', error);
        }
      });
    }
  }

  inserirRegistro() {
    this.router.navigate(['medico/consulta-detalhes', this.consulta.id.toString(), 'inserir-registro', this.consulta.pacienteId.toString()]);
  }


  voltar() {
    this.location.back();
  }

  anexarArquivo(){
    this.router.navigate(['medico/detalhes-paciente', this.consulta.pacienteId.toString(), 'anexar-documento', 'consulta', this.consulta.id.toString()]);
  }
}
