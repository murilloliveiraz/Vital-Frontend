import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reset-password-pop-up',
  templateUrl: './reset-password-pop-up.component.html',
  styleUrls: ['./reset-password-pop-up.component.css']
})
export class ResetPasswordPopupComponent {
  isPopupVisible = true;

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
