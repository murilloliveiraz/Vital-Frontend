import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendarConsultaFormComponent } from 'src/app/components/agendar-consulta-form/agendar-consulta-form.component';
import { AgendarConsultaFormResponse } from 'src/app/interfaces/AgendarConsultaFormResponse';
import { AgendarConsultaRequestContract } from 'src/app/models/consulta/agendarConsultaRequestContract';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { AuthService } from './../../services/auth.service';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { ConsultaService } from './../../services/consulta.service';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente-agendar-consulta',
  templateUrl: './paciente-agendar-consulta.component.html',
  styleUrls: ['./paciente-agendar-consulta.component.css']
})
export class PacienteAgendarConsultaComponent {
  @ViewChild(AgendarConsultaFormComponent) agendarConsultaFormComponent!: AgendarConsultaFormComponent;
  paciente: Paciente;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public pacienteService: PacienteService,
    public authService: AuthService,
    public consultaService: ConsultaService
  ) {}

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
        this.paciente = paciente;
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }

  voltar() {
    this.location.back();
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
      pacienteId: this.paciente.id,
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
          text: "Um email confirmando a consulta foi enviado",
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
        this.router.navigate([`paciente/checkout/${consulta.id}`]);
      },
      error: (error) => {
        alert('Erro ao agendar consulta');
      }
    });
  }
}
