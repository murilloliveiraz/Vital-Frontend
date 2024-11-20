import { Component, Input } from '@angular/core';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { DownloadService } from 'src/app/services/Download.service';
import { ConsultaConcluidaResponseContract } from './../../models/consulta/consultaConcluidaResponseContract';
import { MedicoResponseContract } from './../../models/medico/medicoResponseContract';
import { Consulta } from 'src/app/interfaces/Consulta';
import Swal from 'sweetalert2';
import { ConsultaService } from 'src/app/services/consulta.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-consulta-card',
  templateUrl: './consulta-card.component.html',
  styleUrls: ['./consulta-card.component.css']
})
export class ConsultaCardComponent {
  @Input() consulta: Consulta;
  @Input() tela: string = '';
  medico: MedicoResponseContract;
  isADM: boolean = false;
  isPaciente: boolean = false;

  constructor(private consultaService: ConsultaService, private authService: AuthService) {}

  ngOnInit(){
    this.isADM = this.authService.isAdmin();
    this.isPaciente = this.authService.isPaciente();
  }

  downloadAllDocuments(consulta: Consulta) {
    consulta.documentos.forEach((documento, index) => {
      if (documento.arquivoResultadoUrl) {
        setTimeout(() => {
          window.open(documento.arquivoResultadoUrl, '_blank');
        }, index * 500); // 500 ms de atraso entre cada abertura
      }
    });
  }

  servicosHospitalares = [
    // Exames
    { nome: 'Hemograma', icone: '/assets/images/servicos/hemograma.svg' },
    { nome: 'Raio-X', icone: '/assets/images/servicos/RaioX.svg' },
    { nome: 'Exame de Urina', icone: '/assets/images/servicos/Urina.svg' },
    { nome: 'Eletrocardiograma', icone: '/assets/images/servicos/Eletocardiogama.svg' },
    { nome: 'Teste de Covid-19', icone: '/assets/images/servicos/TesteVirus.svg' },
    { nome: 'Exame de DST', icone: '/assets/images/servicos/DST.svg' },
    { nome: 'Exame Gastrointestinal', icone: '/assets/images/servicos/Gastrointestinologia.svg' },

    // Consultas
    { nome: 'Clínica Geral', icone: '/assets/images/servicos/default.svg' },
    { nome: 'Pediátrica', icone: '/assets/images/servicos/Pediatra.svg' },
    { nome: 'Cardiologia', icone: '/assets/images/servicos/Cardiologia.svg' },
    { nome: 'Dermatologia', icone: '/assets/images/servicos/Dermatologia.svg' },
    { nome: 'Endocrinologia', icone: '/assets/images/servicos/Endocrinologia.svg' },
    { nome: 'Ginecologia', icone: '/assets/images/servicos/Ginecologia.svg' },
    { nome: 'Neurologia', icone: '/assets/images/servicos/Neurologia.svg' },
    { nome: 'Nutricao', icone: '/assets/images/servicos/Nutricao.svg' },
    { nome: 'Ortopedia', icone: '/assets/images/servicos/Ortopedia.svg' },
    { nome: 'Oftalmologia', icone: '/assets/images/servicos/Oftalmologia.svg' },
    { nome: 'Psiquiatria', icone: '/assets/images/servicos/Psicologia.svg' }
  ];

  obterIconeServico(nomeServico: string): string | undefined {
    const servico = this.servicosHospitalares.find(s => s.nome === nomeServico);
    return servico ? servico.icone : '/assets/images/servicos/default.svg';
  }

  cancelarConsulta(){
    this.consultaService.deletarConsulta(this.consulta.id).subscribe(() => {
      Swal.fire({
        title: "Consulta Cancelada!",
        text: "A consulta foi cancelada e um email foi enviado para o paciente",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
    });
  }
}
