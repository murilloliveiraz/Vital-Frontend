import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/interfaces/FormField';

@Component({
  selector: 'app-prontuario-form',
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.css']
})
export class ProntuarioFormComponent {
  formFields: FormField[] =  [
    { inputType: 'input', controlName: "Tipo" ,label: 'Tipo do Registro', type: 'text', value: '', placeholder: 'Tipo do registro', disabled: false },
    { inputType: 'input', controlName: "Exame" ,label: 'Exame', type: 'text', value: '', placeholder: 'Nome do exame', disabled: false },
    { inputType: 'input', controlName: "Local" ,label: 'Local', type: 'text', value: '', placeholder: 'Hospital ou clínica', disabled: false },
    { inputType: 'textarea', controlName: "Queixa" ,label: 'Queixa do paciente', type: 'text', value: '', placeholder: 'Descreva a queixa principal do paciente', disabled: false },
    { inputType: 'textarea', controlName: "ObservacoesPreExame" ,label: 'Observações pré-exame', type: 'text', value: '', placeholder: 'Observações da clínica antes do exame', disabled: false },
    { inputType: 'textarea', controlName: "HistoriaClinica" ,label: 'História clínica', type: 'text', value: '', placeholder: 'Resumo da história clínica relevante', disabled: false },
    { inputType: 'textarea', controlName: "ExameFisico" ,label: 'Exame físico', type: 'text', value: '', placeholder: 'Resultados do exame físico', disabled: false },
    { inputType: 'input', controlName: "Pressao" ,label: 'Pressão arterial', type: 'text', value: '', placeholder: 'Ex: 120/80 mmHg', disabled: false },
    { inputType: 'input', controlName: "Frequencia" ,label: 'Frequência cardíaca', type: 'number', value: '', placeholder: 'bpm', disabled: false },
    { inputType: 'input', controlName: "Temperatura" ,label: 'Temperatura', type: 'number', value: '', placeholder: '°C', disabled: false },
    { inputType: 'textarea', controlName: "Diagnostico" ,label: 'Diagnóstico', type: 'text', value: '', placeholder: 'Diagnóstico preliminar ou final', disabled: false },
    { inputType: 'textarea', controlName: "Plano" ,label: 'Plano de tratamento', type: 'text', value: '', placeholder: 'Descreva o plano de tratamento', disabled: false },
    { inputType: 'textarea', controlName: "Medicacoes" ,label: 'Medicações prescritas', type: 'text', value: '', placeholder: 'Liste as medicações prescritas', disabled: false },
    { inputType: 'textarea', controlName: "Observacoes" ,label: 'Observações adicionais', type: 'text', value: '', placeholder: 'Quaisquer outras observações relevantes', disabled: false }
  ];
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
    this.formFields.forEach(field => {
      this.formGroup.addControl(
        field.controlName,
        new FormControl('')
      );
    });
  }

  getFormData(): any {
    return this.formGroup.value;
  }
}
