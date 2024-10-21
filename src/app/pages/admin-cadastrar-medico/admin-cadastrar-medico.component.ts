import { Location } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-medico',
  templateUrl: './admin-cadastrar-medico.component.html',
  styleUrls: ['./admin-cadastrar-medico.component.css']
})
export class AdminCadastrarMedicoComponent {
  constructor(private location: Location) {}

  voltar() {
    this.location.back();
  }

  cadastrarServico(){
    Swal.fire({
      title: "Médico cadastrado!",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
