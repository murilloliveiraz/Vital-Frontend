import { Component, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'reset-password-pop-up',
  templateUrl: './reset-password-pop-up.component.html',
  styleUrls: ['./reset-password-pop-up.component.css']
})
export class ResetPasswordPopupComponent {
  isPopupVisible = true;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit(); 
  }

  onSubmit() {
      Swal.fire({
        title: "Email enviado!",
        text: "Um email contendo um link para redefinição da sua senha foi enviado.",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
      setTimeout(() => {
        this.close.emit();
      }, 3000);
    }
}
