import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-conta',
  templateUrl: './paciente-conta.component.html',
  styleUrls: ['./paciente-conta.component.css']
})
export class PacienteContaComponent {
  selectedButton: string | null = "dados";

  formFields = [
    { inputType: 'input', label: 'Nome', type: 'text', value: 'David Murillo', placeholder: 'Insira seu nome', disabled: true },
    { inputType: 'input', label: 'Email', type: 'email', value: 'david@exemplo.com', placeholder: 'name@email.com', disabled: true },
    { inputType: 'input', label: 'Sexo', type: 'text', value: 'Masculino', placeholder: 'sexo', disabled: true },
    { inputType: 'input', label: 'Data de nascimento', type: 'date', value: '2005-12-19', placeholder: '2000-01-01', disabled: true },
  ];

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
