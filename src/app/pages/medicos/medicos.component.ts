import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { AuthService } from 'src/app/services/auth.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { MedicoService } from 'src/app/services/medico.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent {
  servicos: ServicoResponseContract[] = [];
  medicos: MedicoResponseContract[] = [];
  hospital: HospitalResponseContract;
  isADM: boolean = false;

  constructor(
    public servicoService: ServicoService,
    public hospitalService: HospitalService,
    public hospitalServicoService: HospitalServicoService,
    public medicoService: MedicoService,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService
  ) {}

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
    return servico ? servico.icone : '/assets/images/servicos/default-icon.svg';
  }

  selecionarServico(servico: ServicoResponseContract): void {
    this.medicoService.getAllBySpecialization(servico.especializacao).subscribe((data: MedicoResponseContract[]) => {
      this.medicos = data;
    });
  }

  voltar() {
    this.location.back();
  }
}
