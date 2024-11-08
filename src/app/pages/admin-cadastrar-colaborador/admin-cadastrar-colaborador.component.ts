import { Location } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-colaborador',
  templateUrl: './admin-cadastrar-colaborador.component.html',
  styleUrls: ['./admin-cadastrar-colaborador.component.css']
})
export class AdminCadastrarColaboradorComponent {
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
