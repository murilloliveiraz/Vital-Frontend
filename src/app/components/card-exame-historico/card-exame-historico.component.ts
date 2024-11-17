import { Component, Input, OnInit } from '@angular/core';
import { Exame } from 'src/app/interfaces/Exame';
import { ExamesService } from 'src/app/services/exames.service';
import Swal from 'sweetalert2';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-card-exame-historico',
  templateUrl: './card-exame-historico.component.html',
  styleUrls: ['./card-exame-historico.component.css']
})
export class CardExameHistoricoComponent {
  @Input() exame: Exame;
  isADM: boolean = false;
  isPaciente: boolean = false;

  constructor(private examesService: ExamesService, private authService: AuthService){}

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

  ngOnInit(){
    this.isADM = this.authService.isAdmin();
    this.isPaciente = this.authService.isPaciente();
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

  cancelarExame(){
    this.examesService.deletarExame(this.exame.id).subscribe(() => {
      Swal.fire({
        title: "Exame cancelado!",
        text: "O exame foi cancelado e um email foi enviado para o paciente",
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
