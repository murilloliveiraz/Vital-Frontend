import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  isPopupVisible = false;
  isADM = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  isPopupVisible2 = false;

  showPopup2() {
    this.isPopupVisible2 = true;
  }

  closePopup2() {
    this.isPopupVisible2 = false;
  }
}
