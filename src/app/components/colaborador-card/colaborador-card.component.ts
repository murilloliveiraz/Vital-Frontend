import { Component, Input } from '@angular/core';
import { AdminResponseContract } from 'src/app/models/administrador/adminResponseContract';
import { AdministradorService } from 'src/app/services/administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-colaborador-card',
  templateUrl: './colaborador-card.component.html',
  styleUrls: ['./colaborador-card.component.css']
})
export class ColaboradorCardComponent {
  @Input() colaborador: AdminResponseContract;

  constructor(private adminService: AdministradorService){}

  excluirColaborador(colab: AdminResponseContract){
    this.adminService.deleteAdmin(colab.id).subscribe(() => {
      Swal.fire({
        title: "O colaborador foi excluído!",
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
