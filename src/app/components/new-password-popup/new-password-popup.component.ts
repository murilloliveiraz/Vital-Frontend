import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-password-popup',
  templateUrl: './new-password-popup.component.html',
  styleUrls: ['./new-password-popup.component.css']
})
export class NewPasswordPopupComponent {
  isPopupVisible2 = true;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit(); // Emite o evento close para o pai
  }

  onSubmit() {
    // Aqui você pode implementar a lógica para enviar a solicitação de redefinição de senha
    console.log('Email enviado!'); // Apenas para teste
    this.close.emit(); // Fecha o pop-up após o envio
  }

}
