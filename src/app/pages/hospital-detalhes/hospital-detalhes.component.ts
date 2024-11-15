import { Component } from '@angular/core';
import { HospitalService } from './../../services/hospital.service';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { map, of, switchMap } from 'rxjs';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { MedicoService } from 'src/app/services/medico.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-hospital-detalhes',
  templateUrl: './hospital-detalhes.component.html',
  styleUrls: ['./hospital-detalhes.component.css']
})
export class HospitalDetalhesComponent {
  hospital: HospitalResponseContract;
  servicos: ServicoResponseContract[] = [];
  medicos: MedicoResponseContract[] = []
  redirect: string = "";
  constructor(
    public hospitalService: HospitalService,
    private location: Location,
    private route: ActivatedRoute,
    public hospitalServicoService: HospitalServicoService,
    public medicoService: MedicoService,
  public authService: AuthService) {}

  ngOnInit(): void {
    const hospitalIdParameter = this.route.snapshot.paramMap.get('id');
    this.checkUserRoleAndRedirect();

    if (hospitalIdParameter) {
      const hospitalId = Number(hospitalIdParameter);

      this.hospitalService.getById(hospitalId).pipe(
        switchMap((hospital: HospitalResponseContract) => {
          this.hospital = hospital;
          if (!hospital) {
            return of({ servicos: [], medicos: [] }); // Retorno vazio se não houver hospital
          }
          // Chama os serviços e os médicos
          return this.hospitalServicoService.getAllByHospitalId(hospital.hospitalId).pipe(
            switchMap((servicos: ServicoResponseContract[]) =>
              this.medicoService.getAllByHospitalId(hospital.hospitalId).pipe(
                map((medicos: MedicoResponseContract[]) => ({ servicos, medicos }))
              )
            )
          );
        })
      ).subscribe({
        next: ({ servicos, medicos }) => {
          this.servicos = servicos;
          this.medicos = medicos;
        },
        error: (error) => {
          console.error('Erro ao buscar dados:', error);
        }
      });
    }

  }

  voltar() {
    this.location.back();
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

  checkUserRoleAndRedirect() {
    const userRole = this.authService.getRoleFromToken();

    if (userRole === 'Administrador') {
      this.redirect = 'admin';
    } else if (userRole === 'Paciente') {
      this.redirect = 'paciente';
    }
  }
}
