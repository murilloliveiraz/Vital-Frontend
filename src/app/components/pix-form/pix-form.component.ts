import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-form',
  templateUrl: './pix-form.component.html',
  styleUrls: ['./pix-form.component.css']
})
export class PixFormComponent {
  copied: boolean = false;

  constructor(private router: Router) {}

  copyToClipboard() {
    const copyText = (document.getElementById('chavepix') as HTMLInputElement).value;

    navigator.clipboard.writeText(copyText).then(() => {
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }

  pagamentoPix(){
    Swal.fire({
      title: "Pagamento Concluído!",
      text: "Um email confirmando a consulta foi enviado.",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
    setTimeout(() => {
      this.router.navigate(['/paciente']);
    }, 3000);
  }
}
