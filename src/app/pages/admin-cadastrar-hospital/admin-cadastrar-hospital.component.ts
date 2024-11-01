import { HospitalService } from './../../services/hospital.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalRequestContract } from 'src/app/models/hospital/hospitalRequestContract';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-hospital',
  templateUrl: './admin-cadastrar-hospital.component.html',
  styleUrls: ['./admin-cadastrar-hospital.component.css']
})
export class AdminCadastrarHospitalComponent {
  cadastroForm: FormGroup;
  constructor(private location: Location, public formBuilder: FormBuilder, private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        endereco: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
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
      next: (hospital: HospitalResponseContract) => {
        Swal.fire({
          title: "Hospital cadastrado!",
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

    const hospital: HospitalRequestContract = {
      nome: this.dadosForm["nome"]?.value,
      endereco: this.dadosForm["endereco"]?.value,
      estado: this.dadosForm["estado"]?.value,
      telefone: this.dadosForm["telefone"]?.value,
    }

    console.log(hospital)
    this.hospitalService.create(hospital).subscribe(observer);
  }
}
