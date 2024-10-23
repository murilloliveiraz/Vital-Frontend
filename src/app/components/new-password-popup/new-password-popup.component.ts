import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-password-popup',
  templateUrl: './new-password-popup.component.html',
  styleUrls: ['./new-password-popup.component.css']
})
export class NewPasswordPopupComponent {
  isPopupVisible2 = true;

  constructor(private router: Router){}

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    Swal.fire({
        title: "A senha foi restaurada!",
        imageUrl: "/assets/images/joiaconcluido.png",
        imageWidth: 250,
        imageHeight: 200,
        imageAlt: "Registro inserido icone",
        confirmButtonColor: "#0099B9",
        confirmButtonText: "Concluído",
      });
      setTimeout(() => {
        this.close.emit();
        this.router.navigate(['/login']);
      }, 3000);
    }
}
