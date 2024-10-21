import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cadastrar-paciente',
  templateUrl: './admin-cadastrar-paciente.component.html',
  styleUrls: ['./admin-cadastrar-paciente.component.css']
})
export class AdminCadastrarPacienteComponent {
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  voltar() {
    this.location.back();
  }

  cadastrarPaciente(){
    Swal.fire({
      title: "Paciente cadastrado!",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
