import { Location } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormContaUsuarioComponent } from 'src/app/components/form-conta-usuario/form-conta-usuario.component';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { ProntuarioRegistro } from 'src/app/interfaces/ProntuarioRegistro';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaConcluidaResponseContract } from 'src/app/models/consulta/consultaConcluidaResponseContract';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { ExamesService } from 'src/app/services/exames.service';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';
import { PacienteRequestContract } from 'src/app/models/paciente/pacienteRequestContract';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.css']
})
export class DetalhesPacienteComponent {
  @ViewChild(FormContaUsuarioComponent) pacienteFormComponent!: FormContaUsuarioComponent;
  paciente: PacienteResponseContract;
  prontuario: ProntuarioRegistro;
  tela: string = '';
  agendamentos: Agendamento[] = []

  selectedButton: string | null = "dados";

  voltar() {
    this.location.back();
  }

  dadosFormFields = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public pacienteService: PacienteService,
    public consultasService: ConsultaService,
    public examesService: ExamesService,
    public router: Router) {}

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    const fullUrl = this.router.url;
    const isMedico = fullUrl.includes('/medico');
    const isAdmin = fullUrl.includes('/admin');
    if (isMedico) {
      this.tela = "medico"
    } else if (isAdmin) {
      this.tela = "admin"
    } else {
      console.log('Tela desconhecida');
    }
    if (pacienteId) {
      const pacienteIdNumber = Number(pacienteId);
      this.pacienteService.getById(pacienteIdNumber).subscribe((data: PacienteResponseContract) => {
        this.paciente = data;
        if (this.paciente) {
          this.dadosFormFields = [
            { inputType: 'textarea', label: 'Alergias', controlName: 'alergias', type: 'text', value: this.paciente?.alergias, placeholder: 'Descreva as alergias', disabled: false },
            { inputType: 'input', label: 'PCD', controlName: 'pcd', type: 'text', value: this.paciente?.pcd ? 'Sim' : 'Não', placeholder: 'Sim ou Não', disabled: true },
            { inputType: 'textarea', label: 'Medicamentos', controlName: 'medicamentos', type: 'text', value: this.paciente?.medicamentos, placeholder: 'Medicamentos contínuos', disabled: false },
            { inputType: 'textarea', label: 'Histórico Familiar', controlName: 'historicoFamiliar', type: 'text', value: this.paciente?.historicoFamiliar, placeholder: 'Histórico de doenças na família', disabled: false },
            { inputType: 'input', label: 'Nome', controlName: 'nome', type: 'text', value: this.paciente?.nome, placeholder: 'Nome do Paciente', disabled: true },
            { inputType: 'input', label: 'Sexo', controlName: 'sexo', type: 'text', value: this.paciente?.sexo, placeholder: 'Sexo', disabled: true },
            { inputType: 'input', label: 'Data de nascimento', controlName: 'dataDeNascimento', type: 'date', value: this.formatDate(this.paciente?.dataNascimento), placeholder: 'Data de nascimento', disabled: true }
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

  salvarAlteracoes() {
    const observer = {
      next: (paciente: PacienteResponseContract) => {
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
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };

    const formData = this.pacienteFormComponent.formGroup.value;

    const paciente: PacienteRequestContract = {
      nome: this.paciente.nome,
      email: this.paciente.email,
      dataNascimento: this.paciente.dataNascimento,
      cpf: this.paciente.cpf,
      pcd: this.paciente.pcd,
      sexo: this.paciente.sexo,
      criadoPorEmail: this.paciente.criadoPorEmail,
      alergias: formData.alergias,
      medicamentos: formData.medicamentos,
      historicoFamiliar: formData.historicoFamiliar,
    }

    this.pacienteService.update(this.paciente.id, paciente).subscribe(observer);
  }
}
