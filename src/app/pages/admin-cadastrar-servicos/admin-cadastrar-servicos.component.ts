import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { ServicoRequestContract } from 'src/app/models/servico/servicoRequestContract';
import { HospitalService } from 'src/app/services/hospital.service';
import { ServicoService } from 'src/app/services/servico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-servicos',
  templateUrl: './admin-cadastrar-servicos.component.html',
  styleUrls: ['./admin-cadastrar-servicos.component.css']
})
export class AdminCadastrarServicosComponent {
  cadastroForm: FormGroup;

  constructor(private location: Location, public formBuilder: FormBuilder, private servicoService: ServicoService) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        descricao: ['', [Validators.required]],
        especializacao: ['', [Validators.required]],
        valor: ['', [Validators.required]],
        tipoServico: ['', [Validators.required]]
      }
    )
  }

  get dadosForm(){
    return this, this.cadastroForm.controls;
  }

  voltar() {
    this.location.back();
  }

  cadastrarServico() {
    const observer = {
      next: (servico: ServicoRequestContract) => {
        Swal.fire({
          title: "Serviço Cadastrado!",
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

    const servico: ServicoRequestContract = {
      nome: this.dadosForm["nome"]?.value,
      descricao: this.dadosForm["descricao"]?.value,
      especializacao: this.dadosForm["especializacao"]?.value,
      valor: this.dadosForm["valor"]?.value,
      tipoServico: this.dadosForm["tipoServico"]?.value
    }

    this.servicoService.create(servico).subscribe(observer);
  }
}
