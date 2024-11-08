import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { AdministradorService } from './../../services/administrador.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminResponseContract } from './../../models/administrador/adminResponseContract';
import { AdminRequestContract } from 'src/app/models/administrador/adminRequestContract';

@Component({
  selector: 'app-admin-cadastrar-colaborador',
  templateUrl: './admin-cadastrar-colaborador.component.html',
  styleUrls: ['./admin-cadastrar-colaborador.component.css']
})
export class AdminCadastrarColaboradorComponent {
  email: string = "";
  constructor(public administradorService: AdministradorService ,private location: Location, public formBuilder: FormBuilder, private authService: AuthService) {}
  cadastroForm: FormGroup;

  ngOnInit(): void {
    this.email = this.authService.getEmailUser();
    this.cadastroForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        cargo: ['', [Validators.required]],
      }
    )
  }

  get dadosForm(){
    return this, this.cadastroForm.controls;
  }

  voltar() {
    this.location.back();
  }

  cadastrarColaborador() {
    const observer = {
      next: (admin: AdminResponseContract) => {
        Swal.fire({
          title: "Colaborador cadastrado!",
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

    const admin: AdminRequestContract = {
      nome: this.dadosForm["nome"]?.value,
      cpf: this.dadosForm["cpf"]?.value,
      email: this.dadosForm["email"]?.value,
      criadoPorEmail: this.email,
      cargo: this.dadosForm["cargo"]?.value
    }

    this.administradorService.createAdmin(admin).subscribe(observer);
  }
}
