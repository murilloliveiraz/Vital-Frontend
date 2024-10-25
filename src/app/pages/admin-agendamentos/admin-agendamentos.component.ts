import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-agendamentos',
  templateUrl: './admin-agendamentos.component.html',
  styleUrls: ['./admin-agendamentos.component.css']
})
export class AdminAgendamentosComponent {
  agendamento: string = "exame";
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  voltar() {
      this.location.back();
  }

  selectButton(button: string) {
    this.agendamento = button;
  }

  agendarConsulta(){
    Swal.fire({
      title: "Agendamento Concluído!",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
