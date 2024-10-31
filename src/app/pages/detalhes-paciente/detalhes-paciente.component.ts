import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProntuarioRegistro } from 'src/app/interfaces/ProntuarioRegistro';
import { Paciente } from 'src/app/models/paciente';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.css']
})
export class DetalhesPacienteComponent {
  paciente: PacienteResponseContract;
  prontuario: ProntuarioRegistro;

  selectedButton: string | null = "dados";

  voltar() {
    this.location.back();
  }

  dadosFormFields = [];

  constructor(private route: ActivatedRoute, private location: Location, public pacienteService: PacienteService) {}

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    if (pacienteId) {
      const pacienteIdNumber = Number(pacienteId);
      this.pacienteService.getById(pacienteIdNumber).subscribe((data: PacienteResponseContract) => {
        this.paciente = data;
        if (this.paciente) {
          this.dadosFormFields = [
            { inputType: 'textarea', label: 'Alergias', type: 'text', value: this.paciente?.alergias, placeholder: 'Descreva as alergias', disabled: false },
            { inputType: 'input', label: 'PCD', type: 'text', value: this.paciente?.pcd ? 'Sim' : 'Não', placeholder: 'Sim ou Não', disabled: true },
            { inputType: 'textarea', label: 'Medicamentos', type: 'text', value: this.paciente?.medicamentos, placeholder: 'Medicamentos contínuos', disabled: false },
            { inputType: 'textarea', label: 'Histórico Familiar', type: 'text', value: this.paciente?.historicoFamiliar, placeholder: 'Histórico de doenças na família', disabled: false },
            { inputType: 'input', label: 'Nome', type: 'text', value: this.paciente?.nome, placeholder: 'Nome do Paciente', disabled: true },
            { inputType: 'input', label: 'Sexo', type: 'text', value: this.paciente?.sexo, placeholder: 'Sexo', disabled: true },
            { inputType: 'input', label: 'Data de nascimento', type: 'date', value: this.formatDate(this.paciente?.dataNascimento), placeholder: 'Data de nascimento', disabled: true }
          ];
        }
      });
    }
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

  salvarAlteracoes(){
    Swal.fire({
      title: "Alterações Salvas!",
      text: "O registro foi inserido no prontuário do paciente.",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
