import { ProntuarioService } from 'src/app/services/prontuario.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormField } from 'src/app/interfaces/FormField';
import { ProntuarioRegistro } from 'src/app/models/prontuario/prontuarioRegistro';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro-prontuario-detalhes',
  templateUrl: './registro-prontuario-detalhes.component.html',
  styleUrls: ['./registro-prontuario-detalhes.component.css']
})
export class RegistroProntuarioDetalhesComponent {
  registro: ProntuarioRegistro;
  formFields: FormField[] =  [];
  formGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private prontuarioService: ProntuarioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const registroId = this.route.snapshot.paramMap.get('id');
    this.loadRegistro(registroId);
  }

  voltar() {
    this.location.back();
  }


  getFormData(): any {
    return this.formGroup.value;
  }


  loadRegistro(id: string) {
    if (id) {
      this.prontuarioService.getAnSpecificRegister(id)
        .subscribe((data: ProntuarioRegistro) => {
          this.registro = data;
          if (this.registro) {
            this.formFields = [
              { inputType: 'input', controlName: "Tipo" ,label: 'Tipo do Registro', type: 'text', value: this.registro?.conteudo.tipo, placeholder: 'Tipo do registro', disabled: false },
              { inputType: 'input', controlName: "Exame" ,label: 'Exame', type: 'text', value: this.registro?.conteudo.exame, placeholder: 'Nome do exame', disabled: false },
              { inputType: 'input', controlName: "Local" ,label: 'Local', type: 'text', value: this.registro?.conteudo.local, placeholder: 'Hospital ou clínica', disabled: false },
              { inputType: 'textarea', controlName: "Queixa" ,label: 'Queixa do paciente', type: 'text', value: this.registro?.conteudo.queixaDoPaciente, placeholder: 'Descreva a queixa principal do paciente', disabled: false },
              { inputType: 'textarea', controlName: "ObservacoesPreExame" ,label: 'Observações pré-exame', type: 'text', value: this.registro?.conteudo.observacoesPreExame, placeholder: 'Observações da clínica antes do exame', disabled: false },
              { inputType: 'textarea', controlName: "HistoriaClinica" ,label: 'História clínica', type: 'text', value: this.registro?.conteudo.historiaClinica, placeholder: 'Resumo da história clínica relevante', disabled: false },
              { inputType: 'textarea', controlName: "ExameFisico" ,label: 'Exame físico', type: 'text', value: this.registro?.conteudo.exameFisico, placeholder: 'Resultados do exame físico', disabled: false },
              { inputType: 'input', controlName: "Pressao" ,label: 'Pressão arterial', type: 'text', value: this.registro?.conteudo.pressaoArterial, placeholder: 'Ex: 120/80 mmHg', disabled: false },
              { inputType: 'input', controlName: "Frequencia" ,label: 'Frequência cardíaca', type: 'number', value: this.registro?.conteudo.frequenciaCardiaca.toString(), placeholder: 'bpm', disabled: false },
              { inputType: 'input', controlName: "Temperatura" ,label: 'Temperatura', type: 'number', value: this.registro?.conteudo.temperatura.toString(), placeholder: '°C', disabled: false },
              { inputType: 'textarea', controlName: "Diagnostico" ,label: 'Diagnóstico', type: 'text', value: this.registro?.conteudo.diagnostico, placeholder: 'Diagnóstico preliminar ou final', disabled: false },
              { inputType: 'textarea', controlName: "Plano" ,label: 'Plano de tratamento', type: 'text', value: this.registro?.conteudo.planoDeTratamento, placeholder: 'Descreva o plano de tratamento', disabled: false },
              { inputType: 'textarea', controlName: "Medicacoes" ,label: 'Medicações prescritas', type: 'text', value: this.registro?.conteudo.medicacoes, placeholder: 'Liste as medicações prescritas', disabled: false },
              { inputType: 'textarea', controlName: "Observacoes" ,label: 'Observações adicionais', type: 'text', value: this.registro?.conteudo.observacoes, placeholder: 'Quaisquer outras observações relevantes', disabled: false }
            ];

            // Inicializar o formGroup com os campos após carregar os dados
            this.formGroup = this.fb.group({});
            this.formFields.forEach(field => {
              this.formGroup.addControl(
                field.controlName,
                new FormControl(field.value)
              );
            });
          }
        });
    }
  }
}
