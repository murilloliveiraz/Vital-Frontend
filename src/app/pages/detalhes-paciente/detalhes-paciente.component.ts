import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProntuarioRegistro } from 'src/app/interfaces/ProntuarioRegistro';
import { Paciente } from 'src/app/models/paciente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhes-paciente',
  templateUrl: './detalhes-paciente.component.html',
  styleUrls: ['./detalhes-paciente.component.css']
})
export class DetalhesPacienteComponent {
  paciente: Paciente;
  prontuario: ProntuarioRegistro;

  pacientes: Paciente[] = [
    new Paciente(0, "Luana Camila", "Feminino", new Date('2005-04-11')),
    new Paciente(1, "João Pedro", "Masculino", new Date('2005-02-16')),
    new Paciente(2, "Mariana Garcia", "Feminino", new Date('2000-12-24')),
  ];

  selectedButton: string | null = "dados";

  registrosPaciente: ProntuarioRegistro[] = [
    {
      id: 0,
      pacienteId: 0,
      tipo: 'Consulta Inicial',
      data: new Date('2024-10-14'),
      conteudo: {
        exame: 'Hemograma completo',
        local: 'Hospital ABC',
        queixaDoPaciente: 'Dor de cabeça frequente',
        historiaClinica: 'Paciente relatou histórico de enxaquecas.',
        pressaoArterial: '120/80 mmHg',
        frequenciaCardiaca: 75,
        temperatura: 36.5,
        diagnostico: 'Enxaqueca crônica',
        planoDeTratamento: 'Iniciar tratamento com analgésicos e repouso'
      },
      observacoes: {
        alergias: 'Alergia a penicilina',
        pcd: false,
        medicamentos: 'Ibuprofeno 400mg',
        historicoFamiliar: 'Histórico de diabetes na família'
      }
    },
    {
      id: 1,
      pacienteId: 1,
      tipo: 'Exame de Rotina',
      data: new Date('2024-09-20'),
      conteudo: {
        exame: 'Ultrassonografia abdominal',
        local: 'Clínica XYZ',
        diagnostico: 'Nenhuma alteração detectada'
      },
      observacoes: {
        alergias: 'Nenhuma',
        pcd: true,
        medicamentos: 'Nenhum',
        historicoFamiliar: 'Histórico de hipertensão na família'
      }
    }
  ];


  dadosFormFields = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    console.log(pacienteId)
    if (pacienteId) {
      this.paciente = this.pacientes.find(paciente => paciente.id.toString() === pacienteId);
      this.prontuario = this.registrosPaciente.find(prontuario => prontuario.pacienteId == this.paciente.id);
    }

    if (this.prontuario && this.prontuario.observacoes) {
      this.dadosFormFields = [
        { inputType: 'textarea', label: 'Alergias', type: 'text', value: this.prontuario.observacoes.alergias, placeholder: 'Descreva as alergias', disabled: false },
        { inputType: 'input', label: 'PCD', type: 'text', value: this.prontuario.observacoes.pcd ? 'Sim' : 'Não', placeholder: 'Sim ou Não', disabled: true },
        { inputType: 'textarea', label: 'Medicamentos', type: 'text', value: this.prontuario.observacoes.medicamentos, placeholder: 'Medicamentos contínuos', disabled: false },
        { inputType: 'textarea', label: 'Histórico Familiar', type: 'text', value: this.prontuario.observacoes.historicoFamiliar, placeholder: 'Histórico de doenças na família', disabled: false },
        { inputType: 'input', label: 'Nome', type: 'text', value: this.paciente?.nome, placeholder: 'Nome do Paciente', disabled: true },
        { inputType: 'input', label: 'Sexo', type: 'text', value: this.paciente?.sexo, placeholder: 'Sexo', disabled: true },
        { inputType: 'input', label: 'Data de nascimento', type: 'date', value: this.paciente?.dataNascimento.toISOString().split('T')[0], placeholder: 'Data de nascimento', disabled: true }
      ];
    }
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
