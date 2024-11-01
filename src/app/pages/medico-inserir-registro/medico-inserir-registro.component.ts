import { Location } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { ProntuarioFormComponent } from 'src/app/components/prontuario-form/prontuario-form.component';
import { RegistroConteudo } from 'src/app/interfaces/RegistroConteudo';
import { Paciente } from 'src/app/models/paciente';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { InserirRegistroNoProntuarioModel } from 'src/app/models/prontuario/inserirRegistroNoProntuarioModel';
import { PacienteService } from 'src/app/services/paciente.service';
import { ProntuarioService } from 'src/app/services/prontuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico-inserir-registro',
  templateUrl: './medico-inserir-registro.component.html',
  styleUrls: ['./medico-inserir-registro.component.css']
})
export class MedicoInserirRegistroComponent {
  @ViewChild(ProntuarioFormComponent) prontuarioFormComponent!: ProntuarioFormComponent;
  paciente: Paciente;
  prontuarioId: number;

  constructor(private route: ActivatedRoute, private location: Location, private pacienteService: PacienteService, private prontuarioService: ProntuarioService) {}

  ngOnInit() {
    const pacienteIdParameter = this.route.snapshot.paramMap.get('pacienteId');
    if (pacienteIdParameter) {
      const pacienteId = Number(pacienteIdParameter)
      this.pacienteService.getById(pacienteId).pipe(
        switchMap((paciente: PacienteResponseContract) => {
          this.paciente = paciente;
          if (this.paciente) {
          }
          return paciente ? this.prontuarioService.getPatientMedicalRecord(paciente.id) : of();
        })
      ).subscribe({
        next: (prontuario: RegistroConteudo[]) => {
          this.prontuarioId = (prontuario[0]["prontuarioId"])
        },
        error: (error) => {
          console.error('Erro ao buscra exame dados:', error);
        }
      });
    }
  }

  inserirRegistro(){
    if (this.prontuarioFormComponent?.formGroup.valid) {
      const observer = {
        next: () => {
          Swal.fire({
            title: "Registro Inserido!",
            text: "O registro foi inserido no prontuário do paciente.",
            imageUrl: "/assets/images/joiaconcluido.png",
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: "Registro inserido icone",
            confirmButtonColor: "#0099B9",
            confirmButtonText: "Concluído",
          });
        },
        error: (err: any) => {
          alert('Ocorreu um erro');
        }
      };
      const formData = this.prontuarioFormComponent.formGroup.value;
      const requestBody: InserirRegistroNoProntuarioModel = {
        tipo: formData["Tipo"],
        conteudo: {
            tipo: formData["Tipo"],
            exame: formData["Exame"],
            local: formData["Local"],
            queixaDoPaciente: formData["Queixa"],
            observacoesPreExame: formData["ObservacoesPreExame"],
            historiaClinica: formData["HistoriaClinica"],
            exameFisico: formData["ExameFisico"],
            pressaoArterial: formData["Pressao"],
            frequenciaCardiaca: formData["Frequencia"],
            temperatura: formData["Temperatura"],
            diagnostico: formData["Diagnostico"],
            planoDeTratamento: formData["Plano"],
            medicacoes: formData["Medicacoes"],
            observacoes: formData["Observacoes"],
        }
    };
      this.prontuarioService.createRecord(this.prontuarioId, requestBody).subscribe(observer);
    } else {
      alert('Formulário inválido');
    }
  }

  voltar() {
    this.location.back();
  }
}
