import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicoRequestContract } from 'src/app/models/medico/medicoRequestContract';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { AuthService } from 'src/app/services/auth.service';
import { MedicoService } from 'src/app/services/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-medico',
  templateUrl: './admin-cadastrar-medico.component.html',
  styleUrls: ['./admin-cadastrar-medico.component.css']
})
export class AdminCadastrarMedicoComponent {
  email: string = "";
  hospitalId: number = 1;
  constructor(public medicoService: MedicoService ,private location: Location, public formBuilder: FormBuilder, private authService: AuthService) {}
  cadastroForm: FormGroup;

  ngOnInit(): void {
    this.email = this.authService.getEmailUser();
    this.cadastroForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        crm: ['', [Validators.required]],
        especialidade: ['', [Validators.required]],
      }
    )
  }

  get dadosForm(){
    return this, this.cadastroForm.controls;
  }

  voltar() {
    this.location.back();
  }

  cadastrarMedico() {
    const observer = {
      next: (medico: MedicoResponseContract) => {
        Swal.fire({
          title: "Médico cadastrado!",
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

    const medico: MedicoRequestContract = {
      nome: this.dadosForm["nome"]?.value,
      cpf: this.dadosForm["cpf"]?.value,
      email: this.dadosForm["email"]?.value,
      crm: this.dadosForm["crm"]?.value,
      especialidade: this.dadosForm["especialidade"]?.value,
      hospitalId: this.hospitalId,
      criadoPorEmail: this.email
    }

    this.medicoService.create(medico).subscribe(observer);
  }
}
