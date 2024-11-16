import { Component, Input } from '@angular/core';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { DownloadService } from 'src/app/services/Download.service';
import { ConsultaConcluidaResponseContract } from './../../models/consulta/consultaConcluidaResponseContract';
import { MedicoResponseContract } from './../../models/medico/medicoResponseContract';
import { Consulta } from 'src/app/interfaces/Consulta';

@Component({
  selector: 'app-consulta-card',
  templateUrl: './consulta-card.component.html',
  styleUrls: ['./consulta-card.component.css']
})
export class ConsultaCardComponent {
  @Input() consulta: Consulta;
  @Input() tela: string = '';
  medico: MedicoResponseContract;

  constructor(private downloadService: DownloadService) {}

  downloadAllDocuments(consulta: Consulta) {
    consulta.documentos.forEach((documento, index) => {
      console.log(documento)
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
}
