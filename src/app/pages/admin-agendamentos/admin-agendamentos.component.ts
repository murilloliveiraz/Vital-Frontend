import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendarConsultaFormComponent } from 'src/app/components/agendar-consulta-form/agendar-consulta-form.component';
import { AgendarConsultaFormResponse } from 'src/app/interfaces/AgendarConsultaFormResponse';
import { AgendarConsultaRequestContract } from 'src/app/models/consulta/agendarConsultaRequestContract';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { ConsultaService } from 'src/app/services/consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-agendamentos',
  templateUrl: './admin-agendamentos.component.html',
  styleUrls: ['./admin-agendamentos.component.css']
})
export class AdminAgendamentosComponent {
  @ViewChild(AgendarConsultaFormComponent) agendarConsultaFormComponent!: AgendarConsultaFormComponent;
  agendamento: string = "exame";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public consultaService: ConsultaService) {}

  voltar() {
      this.location.back();
  }

  selectButton(button: string) {
    this.agendamento = button;
  }


  agendarConsulta(){
    const formData: AgendarConsultaFormResponse = this.agendarConsultaFormComponent.agendamentoDados();
    let consulta: AgendarConsultaRequestContract = {
      nome: formData.nome,
      data: formData.data,
      local: formData.local,
      statusPagamento: "Pendente",
      emailParaReceberNotificacoes: formData.email,
      queixasDoPaciente: formData.queixas,
      medicoId: formData.medicoId,
      pacienteId: formData.pacienteId,
      tipoConsulta: formData.tipoConsulta,
      valorConsulta: formData.valor,
    }
    if(formData.tipoConsulta == "presencial"){
      this.AgendarConsultaPresencial(consulta);
    }
    else {
      this.AgendarConsultaRemota(consulta);
    }
  }

  private AgendarConsultaPresencial(consulta: AgendarConsultaRequestContract) {
    this.consultaService.agendarConsulta(consulta).subscribe({
      next: (consulta: AgendarConsultaResponseContract) => {
        Swal.fire({
          title: "Consulta Agendada!",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          text: "Um email confirmando a consulta foi enviado, acesse o perfil do paciente e conclua o pagamento",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
      },
      error: (error) => {
        alert('Erro ao agendar consulta');
      }
    });
  }

  private AgendarConsultaRemota(consulta: AgendarConsultaRequestContract) {
    this.consultaService.agendarConsultaRemota(consulta).subscribe({
      next: (consulta: AgendarConsultaResponseContract) => {
        Swal.fire({
          title: "Consulta Agendada!",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          text: "Um email confirmando a consulta foi enviado ao paciente, acesse o perfil do paciente e conclua o pagamento",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
      },
      error: (error) => {
        alert('Erro ao agendar consulta');
      }
    });
  }
}
