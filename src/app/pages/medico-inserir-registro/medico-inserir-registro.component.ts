import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico-inserir-registro',
  templateUrl: './medico-inserir-registro.component.html',
  styleUrls: ['./medico-inserir-registro.component.css']
})
export class MedicoInserirRegistroComponent {
  paciente: Paciente;
  formFields = [];

  constructor(private route: ActivatedRoute, private location: Location) {}

  pacientes: Paciente[] = [
    new Paciente(0, "Luana Camila", "Feminino", new Date('2005-04-11')),
    new Paciente(1, "João Pedro", "Masculino", new Date('2005-02-16')),
    new Paciente(2, "Mariana Garcia", "Feminino", new Date('2000-12-24')),
  ];

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('pacienteId');
    if (pacienteId) {
      console.log(pacienteId)
      console.log(this.pacientes)
      this.paciente = this.pacientes.find(paciente => paciente.id.toString() === pacienteId);
    }
    this.formFields = [
      { inputType: 'input', label: 'Exame', type: 'text', value: '', placeholder: 'Nome do exame', disabled: false },
      { inputType: 'input', label: 'Local', type: 'text', value: '', placeholder: 'Hospital ou clínica', disabled: false },
      { inputType: 'textarea', label: 'Queixa do paciente', type: 'text', value: '', placeholder: 'Descreva a queixa principal do paciente', disabled: false },
      { inputType: 'textarea', label: 'Observações pré-exame', type: 'text', value: '', placeholder: 'Observações da clínica antes do exame', disabled: false },
      { inputType: 'textarea', label: 'História clínica', type: 'text', value: '', placeholder: 'Resumo da história clínica relevante', disabled: false },
      { inputType: 'textarea', label: 'Exame físico', type: 'text', value: '', placeholder: 'Resultados do exame físico', disabled: false },
      { inputType: 'input', label: 'Pressão arterial', type: 'text', value: '', placeholder: 'Ex: 120/80 mmHg', disabled: false },
      { inputType: 'input', label: 'Frequência cardíaca', type: 'number', value: '', placeholder: 'bpm', disabled: false },
      { inputType: 'input', label: 'Temperatura', type: 'number', value: '', placeholder: '°C', disabled: false },
      { inputType: 'textarea', label: 'Diagnóstico', type: 'text', value: '', placeholder: 'Diagnóstico preliminar ou final', disabled: false },
      { inputType: 'textarea', label: 'Plano de tratamento', type: 'text', value: '', placeholder: 'Descreva o plano de tratamento', disabled: false },
      { inputType: 'textarea', label: 'Medicações prescritas', type: 'text', value: '', placeholder: 'Liste as medicações prescritas', disabled: false },
      { inputType: 'textarea', label: 'Observações adicionais', type: 'text', value: '', placeholder: 'Quaisquer outras observações relevantes', disabled: false }
    ];
  }

  inserirRegistro(){
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
  }

  voltar() {
    this.location.back();
  }
}
