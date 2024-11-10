import { Component, OnInit } from '@angular/core';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { FormField } from 'src/app/interfaces/FormField';

@Component({
  selector: 'app-paciente-conta',
  templateUrl: './paciente-conta.component.html',
  styleUrls: ['./paciente-conta.component.css']
})
export class PacienteContaComponent {
  paciente: PacienteResponseContract;
  formFields: FormField[] = [];

  constructor(public authService: AuthService, public pacienteService: PacienteService) {}

  ngOnInit() {
    this.carregarEmailUsuarioLogado();
  }

  private carregarEmailUsuarioLogado() {
    const emailUserLogado = this.authService.getEmailUser();
    if (emailUserLogado) {
      this.carregarPacientePorEmail(emailUserLogado);
    }
  }

  private carregarPacientePorEmail(email: string) {
    this.pacienteService.getByEmail(email).subscribe({
      next: (paciente: PacienteResponseContract) => {
        if (paciente) {
          this.paciente = paciente;
          console.log(paciente)
          this.formFields = [
            { inputType: 'input', label: 'Nome', type: 'text', value: this.paciente.nome, controlName: 'nome', placeholder: 'Insira seu nome', disabled: true },
            { inputType: 'input', label: 'Data de nascimento', controlName: 'dataDeNascimento', type: 'date', value: this.formatDate(this.paciente?.dataNascimento), placeholder: 'Data de nascimento', disabled: true },
            { inputType: 'input', label: 'Email', type: 'email', value: this.paciente.email, controlName: 'email', placeholder: 'name@email.com', disabled: true },
            { inputType: 'input', label: 'Sexo', type: 'text', value: this.paciente.sexo,controlName: 'sexo', placeholder: 'sexo', disabled: true },
            { inputType: 'textarea', label: 'Alergias', controlName: 'alergias', type: 'text', value: this.paciente?.alergias, placeholder: 'Descreva as alergias', disabled: true },
            { inputType: 'input', label: 'PCD', controlName: 'pcd', type: 'text', value: this.paciente?.pcd ? 'Sim' : 'Não', placeholder: 'Sim ou Não', disabled: true },
            { inputType: 'textarea', label: 'Medicamentos', controlName: 'medicamentos', type: 'text', value: this.paciente?.medicamentos, placeholder: 'Medicamentos contínuos', disabled: true },
            { inputType: 'textarea', label: 'Histórico Familiar', controlName: 'historicoFamiliar', type: 'text', value: this.paciente?.historicoFamiliar, placeholder: 'Histórico de doenças na família', disabled: true },
          ];
        } else {
          console.warn('Paciente não encontrado.');
        }
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

}
