import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendarConsultaFormComponent } from 'src/app/components/agendar-consulta-form/agendar-consulta-form.component';
import { AgendarConsultaFormResponse } from 'src/app/interfaces/AgendarConsultaFormResponse';
import { AgendarConsultaRequestContract } from 'src/app/models/consulta/agendarConsultaRequestContract';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-agendar-consulta',
  templateUrl: './paciente-agendar-consulta.component.html',
  styleUrls: ['./paciente-agendar-consulta.component.css']
})
export class PacienteAgendarConsultaComponent {
  @ViewChild(AgendarConsultaFormComponent) agendarConsultaFormComponent!: AgendarConsultaFormComponent;
  paciente: Paciente;
  constructor(private route: ActivatedRoute, private location: Location) {}

  voltar() {
    this.location.back();
  }

  agendarConsulta(){
    const formData: AgendarConsultaFormResponse = this.agendarConsultaFormComponent.agendamentoDados();
    if(formData.tipoConsulta == "presencial"){
      let consulta: AgendarConsultaRequestContract = {
        nome: formData.nome,
        data: formData.data,
        local: formData.local,
        statusPagamento: "Pendente",
        emailParaReceberNotificacoes: formData.email,
        medicoId: formData.medicoId,
        pacienteId: this.paciente?.id || 0,
        tipoConsulta: formData.tipoConsulta,
        valorConsulta: formData.valor,
      }
    }
    console.log(formData)
  }
}
