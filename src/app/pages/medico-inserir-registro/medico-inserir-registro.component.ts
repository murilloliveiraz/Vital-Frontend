import { Location } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProntuarioFormComponent } from 'src/app/components/prontuario-form/prontuario-form.component';
import { FormField } from 'src/app/interfaces/FormField';
import { Paciente } from 'src/app/models/paciente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico-inserir-registro',
  templateUrl: './medico-inserir-registro.component.html',
  styleUrls: ['./medico-inserir-registro.component.css']
})
export class MedicoInserirRegistroComponent {
  @ViewChild(ProntuarioFormComponent) prontuarioFormComponent!: ProntuarioFormComponent;
  paciente: Paciente;

  constructor(private route: ActivatedRoute, private location: Location) {}

  pacientes: Paciente[] = [
    new Paciente(0, "Luana Camila", "Feminino", "5646578945132", new Date('2005-04-11')),
    new Paciente(1, "João Pedro", "Masculino", "5646578945132", new Date('2005-02-16')),
    new Paciente(2, "Mariana Garcia", "Feminino", "5646578945132", new Date('2000-12-24')),
  ];

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('pacienteId');
    if (pacienteId) {
      this.paciente = this.pacientes.find(paciente => paciente.id.toString() === pacienteId);
    }
  }

  inserirRegistro(){
    if (this.prontuarioFormComponent?.formGroup.valid) {
      const formData = this.prontuarioFormComponent.formGroup.value;
      console.log('Dados do Formulário:', formData);
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
    } else {
      console.log('Formulário inválido');
    }
  }

  voltar() {
    this.location.back();
  }
}
