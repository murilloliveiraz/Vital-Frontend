import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendar-exame-form',
  templateUrl: './agendar-exame-form.component.html',
  styleUrls: ['./agendar-exame-form.component.css']
})
export class AgendarExameFormComponent {
  agendarExame(){
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
