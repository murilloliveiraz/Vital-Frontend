import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent {

  constructor(private router: Router) {}

  pagamentoCredito(){
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
