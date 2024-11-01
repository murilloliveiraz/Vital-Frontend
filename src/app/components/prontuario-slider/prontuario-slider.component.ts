import { Component, Input, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { ProntuarioRegistro } from 'src/app/models/prontuario/prontuarioRegistro';
import { ProntuarioService } from 'src/app/services/prontuario.service';

@Component({
  selector: 'app-prontuario-slider',
  templateUrl: './prontuario-slider.component.html',
  styleUrls: ['./prontuario-slider.component.css']
})
export class ProntuarioSliderComponent {
  @Input() pacienteId: number;
  constructor(private prontuarioService: ProntuarioService) {}

  registrosProntuarioPaciente: ProntuarioRegistro[];

  selectedRegistroId: string = null;

  ngOnInit(): void {
    this.prontuarioService.getPatientMedicalRecord(this.pacienteId)
      .subscribe((data: ProntuarioRegistro[]) => {
        this.registrosProntuarioPaciente = data;
        console.log(data)
      });
  }

  ngAfterViewInit(): void {
    var splide = new Splide('#prontuario-slider', {
      perPage: 3,
      focus  : 0,
      pagination: false,
      arrows: false,
      autoWidth: true
    });

    splide.mount();
  }

  selectRegistro(registroId: string) {
    this.selectedRegistroId = registroId;
    const consultaSelecionada = this.getRegistroSelecionado();

    if (consultaSelecionada) {
      this.prontuarioFormFields = this.prontuarioFormFields.map(field => {
        const campo = field.controlName.toLowerCase().replace(' ', '');
        return {
          ...field,
          value: consultaSelecionada.conteudo[campo] || ''
        };
      });
    }
  }

  getRegistroSelecionado(): ProntuarioRegistro {
    return this.registrosProntuarioPaciente.find(registro => registro.id == this.selectedRegistroId);
  }

  prontuarioFormFields = [
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
    { inputType: 'textarea', controlName: "Observacao" ,label: 'Observações adicionais', type: 'text', value: '', placeholder: 'Quaisquer outras observações relevantes', disabled: false }
  ];
}
