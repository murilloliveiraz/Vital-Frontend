import { Location } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-servicos',
  templateUrl: './admin-cadastrar-servicos.component.html',
  styleUrls: ['./admin-cadastrar-servicos.component.css']
})
export class AdminCadastrarServicosComponent {
  constructor(private location: Location) {}

  voltar() {
    this.location.back();
  }

  cadastrarServico(){
    Swal.fire({
      title: "Serviço Cadastrado!",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
