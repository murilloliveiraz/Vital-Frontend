import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicoRequestContract } from 'src/app/models/servico/servicoRequestContract';
import Swal from 'sweetalert2';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { AdicionarServicoAoHospital } from 'src/app/models/hospital-servico/AdicionarServicoAoHospital';
import { ServicoService } from './../../services/servico.service';
import { HospitalService } from './../../services/hospital.service';
import { switchMap } from 'rxjs';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';

@Component({
  selector: 'app-admin-adicionar-servico-ao-hospital',
  templateUrl: './admin-adicionar-servico-ao-hospital.component.html',
  styleUrls: ['./admin-adicionar-servico-ao-hospital.component.css']
})
export class AdminAdicionarServicoAoHospitalComponent {
  cadastroForm: FormGroup;
  hospitalId: number;
  servicoId: number;
  hospitais: HospitalResponseContract[];
  servicos: ServicoResponseContract[];
  filteredServicoList: ServicoResponseContract[] = [];
  filteredHospitalList: HospitalResponseContract[] = [];
  servicoInput: string = '';
  hospitalInput: string = '';
  showServicos = false;
  showHospitais = false;

  constructor(
    private location: Location,
    public formBuilder: FormBuilder,
    private hospitalServicoService: HospitalServicoService,
    private servicoService: ServicoService,
    private hospitalService: HospitalService,
  ) {}

  ngOnInit() :void {
    this.cadastroForm = this.formBuilder.group(
      {
        servicoInput: ['', [Validators.required]],
        hospitalInput: ['', [Validators.required]],
      }
    )
    const observerDeServicos = {
      next: (servicos: ServicoResponseContract[]) => {
        this.servicos = servicos;
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };
    const observerDeHospitais = {
      next: (data: HospitalResponseContract[]) => {
        this.hospitais = data;
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };
    this.servicoService.getAll().subscribe(observerDeServicos);
    this.hospitalService.getAll().subscribe(observerDeHospitais);
  }

  voltar() {
    this.location.back();
  }

  cadastrarServico() {
    const observer = {
      next: (servico: AdicionarServicoAoHospital) => {
        Swal.fire({
          title: "Serviço adicionado ao Hospital!",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };

    const servico: AdicionarServicoAoHospital = {
      hospitalId: this.hospitalId,
      servicoId: this.servicoId
    }

    this.hospitalServicoService.post(servico).subscribe(observer);
  }

  filterServicoList() {
    const input = this.servicoInput.replace(/\D/g, '');
    this.filteredServicoList = this.servicos.filter(servico =>
      servico.nome.replace(/\D/g, '').includes(input)
    );
  }

  selectServico(servico: ServicoResponseContract) {
    this.servicoInput = servico.nome;
    this.servicoId = servico.servicoId;
    this.showServicos = false;
  }

  hideServicos() {
    setTimeout(() => this.showServicos = false, 200);
  }

  filterHospitalList() {
    const input = this.hospitalInput.replace(/\D/g, '');
    this.filteredHospitalList = this.hospitais.filter(hospital =>
      hospital.nome.replace(/\D/g, '').includes(input)
    );
  }

  selectHospital(hospital: HospitalResponseContract) {
    this.hospitalInput = hospital.nome;
    this.hospitalId = hospital.hospitalId;
    this.showHospitais = false;
  }

  hideHospitais() {
    setTimeout(() => this.showHospitais = false, 200);
  }
}
