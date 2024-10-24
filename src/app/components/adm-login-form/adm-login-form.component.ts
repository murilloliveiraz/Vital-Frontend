import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-login-form',
  templateUrl: './adm-login-form.component.html',
  styleUrls: ['./adm-login-form.component.css']
})
export class AdmLoginFormComponent {
  isPopupVisible = false; // Variável para controlar a visibilidade do popup

  showPopup() {
    this.isPopupVisible = true; // Muda para verdadeiro para mostrar o popup
  }

  closePopup() {
    this.isPopupVisible = false; // Para esconder o popup
  }

  isPopupVisible2 = false; // Variável para controlar a visibilidade do popup

  showPopup2() {
    this.isPopupVisible2 = true; // Muda para verdadeiro para mostrar o popup
  }

  closePopup2() {
    this.isPopupVisible2 = false; // Para esconder o popup
  }
}
