import { Component, Input } from '@angular/core';
import { Exame } from 'src/app/interfaces/Exame';

@Component({
  selector: 'app-card-exame-historico',
  templateUrl: './card-exame-historico.component.html',
  styleUrls: ['./card-exame-historico.component.css']
})
export class CardExameHistoricoComponent {
  @Input() exame: Exame;
  @Input() tela: string = '';

  downloadAllDocuments(exame: any) {
    if (exame.arquivoResultadoUrl) {
      setTimeout(() => {
        window.open(exame.arquivoResultadoUrl, '_blank');
      }, 500); // 500 ms de atraso entre cada abertura
    }
    if (exame.urlResultadoClinicaExterna) {
      setTimeout(() => {
        window.open(exame.urlResultadoClinicaExterna, '_blank');
      }, 1000); // 1000 ms de atraso entre cada abertura
    }
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
