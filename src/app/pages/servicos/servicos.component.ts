import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { ServicoService } from 'src/app/services/servico.service';
import { ActivatedRoute } from '@angular/router';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { HospitalService } from 'src/app/services/hospital.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  servicos: ServicoResponseContract[] = [];
  hospital: HospitalResponseContract;
  isADM: boolean = false;

  constructor(public servicoService: ServicoService, public hospitalService: HospitalService, public hospitalServicoService: HospitalServicoService, private location: Location, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAdmin()) {
      this.isADM = true;
    }
    const hospitalIdParameter = this.route.snapshot.paramMap.get('id');

    if (hospitalIdParameter != "0") {
      const hospitalId = Number(hospitalIdParameter);
      this.hospitalServicoService.getAllByHospitalId(hospitalId).subscribe((data: ServicoResponseContract[]) => {
        this.servicos = data;
      });
      this.hospitalService.getById(hospitalId).subscribe((data: HospitalResponseContract) => {
        this.hospital = data;
      });
    } else {
      this.servicoService.getAll().subscribe((data: ServicoResponseContract[]) => {
        this.servicos = data;
      });
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

  voltar() {
    this.location.back();
  }

  excluirServico(servico: ServicoResponseContract){
    this.hospitalServicoService.delete(this.hospital.hospitalId, servico.servicoId).subscribe(() => {
      Swal.fire({
        title: "O Serviço foi removido do hospital!",
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
