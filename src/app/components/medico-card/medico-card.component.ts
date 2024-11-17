import { Component, Input } from '@angular/core';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import Swal from 'sweetalert2';
import { MedicoService } from './../../services/medico.service';

@Component({
  selector: 'app-medico-card',
  templateUrl: './medico-card.component.html',
  styleUrls: ['./medico-card.component.css']
})
export class MedicoCardComponent {
  @Input() medico: MedicoResponseContract;
  @Input() isADM: boolean = false;

  constructor(private medicoService: MedicoService){}

  excluirMedico(medico: MedicoResponseContract){
    this.medicoService.delete(medico.id).subscribe(() => {
      Swal.fire({
        title: "O médico foi excluído!",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
    });
  }
}
