import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { ProntuarioRegistro } from 'src/app/interfaces/ProntuarioRegistro';

@Component({
  selector: 'app-prontuario-slider',
  templateUrl: './prontuario-slider.component.html',
  styleUrls: ['./prontuario-slider.component.css']
})
export class ProntuarioSliderComponent {
  selectedRegistroId: number = null;

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

  selectRegistro(registroId: number) {
    this.selectedRegistroId = registroId;
    const consultaSelecionada = this.getRegistroSelecionado();

    if (consultaSelecionada) {
      this.prontuarioFormFields = this.prontuarioFormFields.map(field => {
        const campo = field.label.toLowerCase().replace(' ', '');

        return {
          ...field,
          value: consultaSelecionada.conteudo[campo] || ''
        };
      });
    }
  }

  getRegistroSelecionado() {
    return this.registrosPaciente.find(registro => registro.id == this.selectedRegistroId);
  }

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

  prontuarioFormFields = [
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
