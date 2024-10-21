import { Location } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-admin',
  templateUrl: './admin-cadastrar-admin.component.html',
  styleUrls: ['./admin-cadastrar-admin.component.css']
})
export class AdminCadastrarAdminComponent {
  constructor(private location: Location) {}

  voltar() {
    this.location.back();
  }

  cadastrarServico(){
    Swal.fire({
      title: "Colaborador cadastrado!",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
