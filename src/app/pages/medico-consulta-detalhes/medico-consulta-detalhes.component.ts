import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { FormField } from 'src/app/interfaces/FormField';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { AuthService } from 'src/app/services/auth.service';
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
  formFields: FormField[] = [];
  isADM: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private consultaService: ConsultaService,
    private pacienteService: PacienteService,
    private authService: AuthService) {}

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
    this.isADM = this.authService.isAdmin();
    const consultaIdParameter = this.route.snapshot.paramMap.get('id');
    if (consultaIdParameter) {
      const consultaId = Number(consultaIdParameter)
      this.consultaService.getConsultaById(consultaId).pipe(
        switchMap((consulta: AgendarConsultaResponseContract) => {
          this.consulta = consulta;
          if (this.consulta) {
            this.formFields = [
              { inputType: 'input', controlName: 'Exame', label: 'Exame', type: 'text', value: this.consulta.nome || '', placeholder: 'nome do exame', disabled: true},
              { inputType: 'input', controlName: 'Local', label: 'Local', type: 'text', value: this.consulta.local || '', placeholder: 'hospital', disabled: true },
              { inputType: 'textarea', controlName: 'Queixa', label: 'Queixa do paciente', type: 'text', value: this.consulta.queixasDoPaciente || '', placeholder: 'queixa', disabled: true }
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

  concluirPagamento(){
    this.consultaService.concluirPagamento(this.consulta.id).subscribe(() => {
      Swal.fire({
        title: "Pagamento Concluído",
        text: "O status do pagamento foi alterado para: Concluido.",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
    });
  }

  cancelarConsulta(){
    this.consultaService.deletarConsulta(this.consulta.id).subscribe(() => {
      Swal.fire({
        title: "Consulta Cancelada!",
        text: "A consulta foi cancelada e um email foi enviado para o paciente",
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

  anexarArquivo(){
    console.log(this.isADM)
    if(this.isADM){
      this.router.navigate(['admin/detalhes-paciente', this.consulta.pacienteId.toString(), 'anexar-documento', 'consulta', this.consulta.id.toString()]);
    } else {
      this.router.navigate(['medico/detalhes-paciente', this.consulta.pacienteId.toString(), 'anexar-documento', 'consulta', this.consulta.id.toString()]);
    }
  }
}
